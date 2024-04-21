import moment from "moment";
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

const EventTable = ({ events, handleViewEvent }) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>City</TableHead>
          <TableHead>Date</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {events.length > 0 &&
          events.map((event) => {
            return (
              <TableRow key={event.id}>
                <TableCell className="font-medium">{event.name}</TableCell>
                <TableCell>{event.city}</TableCell>
                <TableCell>
                  {moment.utc(event.dateStart).format("DD/MM/YYYY")}
                </TableCell>
                <TableCell className="text-right">
                  <Button onClick={() => handleViewEvent(event.id)} size="sm">
                    View
                  </Button>
                </TableCell>
              </TableRow>
            );
          })}
      </TableBody>
    </Table>
  );
};

export default EventTable;
