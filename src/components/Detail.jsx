import React from "react";

const Detail = () => {
  return (
    <div className="text-center mb-8">
      <p className="text-lg text-gray-700 dark:text-gray-300">
        <strong>Phone:</strong> +91 7975755146
      </p>
      <p className="text-lg text-gray-700 dark:text-gray-300">
        <strong>Email:</strong>{" "}
        <a
          href="mailto:pavankumarkkgf@gmail.com"
          className="text-blue-600 hover:underline"
        >
          pavankumarkkgf@gmail.com
        </a>
      </p>
    </div>
  );
};

export default Detail;
