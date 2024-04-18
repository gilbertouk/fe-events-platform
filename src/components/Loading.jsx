const Loading = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-900/50 dark:bg-gray-950/50">
      <div className="flex items-center space-x-4">
        <div className="w-8 h-8 border-4 border-gray-300 dark:border-gray-500 rounded-full animate-spin" />
        <span className="text-gray-300 dark:text-gray-400 text-sm font-medium">
          Loading...
        </span>
      </div>
    </div>
  );
};

export default Loading;
