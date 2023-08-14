import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function RedirectPage() {
  const { shortCode } = useParams();

  useEffect(() => {
    // Make an API request to fetch the long URL based on the short code
    axios.get(`https://faas-syd1-c274eac6.doserverless.co/api/v1/web/fn-c61d7e34-1b33-4cd0-b127-3598668965ae/linkcreator/main`, {
      params: {
        "short": shortCode
      }
    })
      .then(response => {
        // Once you have the long URL, redirect the user to it
        window.location.href = response.data;

        console.log(response.data);
      })
      .catch(error => {
        // Handle error, maybe show an error message to the user
        window.location.href = "https://flinderscs.com";
      });
  }, [shortCode]);

  return (
    <div>
      Redirecting...
    </div>
  );
}

export default RedirectPage;
