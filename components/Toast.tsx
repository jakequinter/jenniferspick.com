import React from 'react';

interface ToastProps {
  text: string;
  type: string;
}

const Toast = ({ text, type }: ToastProps) => {
  return (
    <div
      className={
        type === 'success'
          ? 'rounded-md bg-green-100 p-4 mb-16'
          : 'rounded-md bg-yellow-100 p-4 mb-16'
      }
    >
      <div className="flex">
        <div className="flex-shrink-0">
          {type === 'success' ? (
            <svg
              className="h-5 w-5 text-green-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg
              className="h-5 w-5 text-yellow-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </div>
        <div className="ml-3">
          <h3
            className={
              type === 'success'
                ? 'text-sm font-medium text-green-800'
                : 'text-sm font-medium text-yellow-800'
            }
          >
            {type === 'success' ? 'Success!' : 'Warning!'}
          </h3>
          <div
            className={
              type === 'success'
                ? 'mt-2 text-sm text-green-700'
                : 'mt-2 text-sm text-yellow-700'
            }
          >
            <p>{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Toast;
