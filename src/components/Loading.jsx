// Loading.jsx
import React from 'react';

const Loading = () => {
  return (
    
    <div id="spinner-container" class="flex justify-center items-center h-screen">
   
    <div class="space-y-4 text-center">
        <div class="flex justify-center space-x-1">
            <div class="w-4 h-4 bg-blue-500 rounded-full animate-bounce"></div>
            <div class="w-4 h-4 bg-blue-500 rounded-full animate-bounce delay-100"></div>
            <div class="w-4 h-4 bg-blue-500 rounded-full animate-bounce delay-200"></div>
        </div>

        <div class="text-blue-500 text-xl mt-4">Please Wait...</div>
    </div>
</div>

  );
};

export default Loading;
