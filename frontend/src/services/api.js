// src/services/api.js
import axios from 'axios';

const backendUrl = 'https://learngpt-dxbf.onrender.com';

export const uploadAndSimplify = async (file) => {
  const formData = new FormData();
  formData.append('file', file);
  try {
    const response = await axios.post(`${backendUrl}/api/simplify-file`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    return response.data;
  } catch (error) {
    console.error("Error uploading and simplifying file:", error);
    throw error;
  }
};

export const simplifyTextFurther = async (text) => {
  try {
    const response = await axios.post(`${backendUrl}/api/simplify-text`, { text });
    return response.data;
  } catch (error) {
    console.error("Error simplifying text further:", error);
    throw error;
  }
};

// ADD THIS NEW FUNCTION
export const downloadPdf = async (text) => {
  try {
    const response = await axios.post(`${backendUrl}/api/generate-pdf`, { text }, {
      responseType: 'blob', // This is crucial for handling file downloads
    });

    // Create a temporary link in the browser to trigger the download
    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'simplified_document.pdf'); // or any other extension
    document.body.appendChild(link);
    link.click();

    // Clean up the temporary link
    link.parentNode.removeChild(link);
    window.URL.revokeObjectURL(url);

  } catch (error) {
    console.error("Error downloading PDF:", error);
    throw error;
  }
};