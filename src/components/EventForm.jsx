import { useRef, useState } from "react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { apiPrivate } from "@/services/api";
import useCategoriesContext from "@/hooks/useCategoriesContext";

import { Input } from "@/components/ui/input";
import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import Error from "./Error";
import { ArrowRight, Loader2Icon } from "lucide-react";

import { uploadImage } from "@/services/cloudinary/cloudinary";
import { convertToUTC } from "@/helpers/convertDateToUTC";

const schema = z
  .object({
    name: z.string(),
    price: z.number().or(z.string()),
    capacity: z.number().or(z.string()).pipe(z.coerce.number()),
    dateStart: z.coerce.date(),
    dateEnd: z.coerce.date(),
    description: z.string(),
    information: z.string(),
    address: z.string(),
    city: z.string(),
    postcode: z.string().transform((val) => val.toUpperCase()),
    country: z.string(),
    categoryId: z.string(),
  })
  .refine(
    (data) => {
      if (data.price === "Free" || !isNaN(data.price)) return true;
      return false;
    },
    {
      message: "Price must be a number or a string 'Free'",
      path: ["price"],
    },
  )
  .refine(
    (data) => {
      if (data.capacity <= 0) return false;
      return true;
    },
    {
      message: "Capacity must be a positive number",
      path: ["capacity"],
    },
  )
  .refine(
    (data) => {
      if (data.dateStart < new Date()) return false;
      return true;
    },
    {
      message: "Start date must be a future date",
      path: ["dateStart"],
    },
  )
  .refine(
    (data) => {
      if (new Date(data.dateStart) > new Date(data.dateEnd)) return false;
      if (new Date(data.dateStart) < new Date(data.dateEnd)) return true;
    },
    {
      message: "Date Start must be before Date End",
      path: ["dateStart"],
    },
  );

const EventForm = ({ setIsAddEvent, setPage }) => {
  const [files, setFiles] = useState(null);
  const inputFile = useRef(null);
  const { categories } = useCategoriesContext();
  const [isRequestApi, setIsRequestApi] = useState(false);
  const [error, setError] = useState(null);
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      country: "United Kingdom",
      name: "",
      price: "",
      capacity: "",
      dateStart: "",
      dateEnd: "",
      description: "",
      information: "",
      address: "",
      city: "",
      postcode: "",
      categoryId: "",
    },
  });
  const userLogged = JSON.parse(localStorage.getItem("user"));

  const handleFileChange = (e) => {
    if (e.target.files) {
      setFiles(e.target.files);
    }
  };

  const handleReset = () => {
    if (inputFile.current) {
      inputFile.current.value = "";
      inputFile.current.type = "text";
      inputFile.current.type = "file";
    }
  };

  const handleSubmitEvent = async (data) => {
    setIsRequestApi(true);
    let publicImageId = "";
    if (files) {
      let signature;
      try {
        const getSignature = await apiPrivate.get(
          "/cloudinary/sign-upload-image?folder=events",
        );
        signature = getSignature?.data?.body;
        const result = await uploadImage(files, signature);
        publicImageId = result[0].public_id;
      } catch (error) {
        setError(error);
        setIsRequestApi(false);
      }
    }

    let imageUrl;
    if (!publicImageId) {
      imageUrl = import.meta.env.VITE_DEFAULT_IMAGE_PATH;
    }

    if (publicImageId) {
      imageUrl = `https://res.cloudinary.com/dvrwr83w9/image/upload/c_fill,h_800,w_1200/c_limit,h_800,w_1200/${publicImageId}.jpg`;
    }

    const eventData = {
      ...data,
      postcode: data.postcode.toUpperCase(),
      dateStart: convertToUTC(data.dateStart),
      dateEnd: convertToUTC(data.dateEnd),
      userId: userLogged.id,
      logoUrl: imageUrl,
    };

    try {
      await apiPrivate.post("/event", eventData);
      handleReset();
      form.reset();
      setPage(1);
      setIsAddEvent(false);
    } catch (error) {
      setError(error);
      window.scrollTo(0, 0);
    } finally {
      setIsRequestApi(false);
    }
  };

  return (
    <div className="container mx-auto max-w-4xl px-4 py-4">
      {error && <Error />}
      <h1 className="text-3xl font-bold mb-6">Create New Event</h1>
      <Form {...form}>
        <form
          className="space-y-2"
          onSubmit={form.handleSubmit(handleSubmitEvent)}
        >
          <div className="grid grid-cols-none sm:grid-cols-2 gap-2">
            <div className="space-y-2">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="name" required {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="space-y-2">
              <FormField
                control={form.control}
                name="categoryId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Category</FormLabel>
                    <Select onValueChange={field.onChange} required>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {categories.length > 0 &&
                          categories.map((category) => {
                            return (
                              <SelectItem key={category.id} value={category.id}>
                                {category.name}
                              </SelectItem>
                            );
                          })}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="space-y-2">
              <FormField
                control={form.control}
                name="price"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Price</FormLabel>
                    <FormControl>
                      <Input required placeholder="price" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="space-y-2">
              <FormField
                control={form.control}
                name="capacity"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Capacity</FormLabel>
                    <FormControl>
                      <Input
                        required
                        type="number"
                        placeholder="capacity"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="space-y-2">
              <FormField
                control={form.control}
                name="dateStart"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Date Start</FormLabel>
                    <FormControl>
                      <Input
                        required
                        placeholder="dateStart"
                        type="datetime-local"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="space-y-2">
              <FormField
                control={form.control}
                name="dateEnd"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Date End</FormLabel>
                    <FormControl>
                      <Input
                        required
                        placeholder="dateEnd"
                        type="datetime-local"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <div className="space-y-2">
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea required placeholder="description" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="space-y-2">
            <FormField
              control={form.control}
              name="information"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Information</FormLabel>
                  <FormControl>
                    <Textarea required placeholder="information" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="space-y-2">
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Address</FormLabel>
                  <FormControl>
                    <Textarea required placeholder="address" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-none sm:grid-cols-2 gap-2">
            <div className="space-y-2">
              <FormField
                control={form.control}
                name="city"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>City</FormLabel>
                    <FormControl>
                      <Input required placeholder="city" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="space-y-2">
              <FormField
                control={form.control}
                name="postcode"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Postcode</FormLabel>
                    <FormControl>
                      <Input required placeholder="postcode" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="space-y-2">
              <FormField
                control={form.control}
                name="country"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Country</FormLabel>
                    <FormControl>
                      <Input required placeholder="country" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              name="image"
              render={() => (
                <FormItem>
                  <FormLabel>Image</FormLabel>
                  <FormControl>
                    <Input
                      type="file"
                      onChange={handleFileChange}
                      ref={inputFile}
                    />
                  </FormControl>
                  <FormDescription>
                    Please leave the input empty if you prefer to use the
                    default image
                  </FormDescription>
                </FormItem>
              )}
            />
          </div>

          <div className="flex justify-center py-4">
            <Button type="submit" disabled={isRequestApi}>
              {isRequestApi ? (
                <>
                  <Loader2Icon className="mr-2 h-4 w-4 animate-spin" />
                  Please wait
                </>
              ) : (
                <>
                  Create Event &nbsp;
                  <ArrowRight />
                </>
              )}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default EventForm;
