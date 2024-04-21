export const uploadImage = async (files, signature) => {
  const url = `https://api.cloudinary.com/v1_1/dvrwr83w9/auto/upload`;
  const formData = new FormData();
  const responseData = [];

  for (let i = 0; i < files.length; i++) {
    let file = files[i];
    formData.append("file", file);
    formData.append("api_key", signature.apiKey);
    formData.append("timestamp", signature.timestamp);
    formData.append("signature", signature.signature);
    formData.append("folder", signature.folder);

    try {
      const response = await fetch(url, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error(response?.error?.message);
      }

      const fetchResponse = await response.json();

      responseData.push(fetchResponse);
    } catch (error) {
      throw new Error(error);
    }
  }

  return responseData;
};
