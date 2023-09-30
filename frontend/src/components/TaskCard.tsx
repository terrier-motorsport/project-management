function TaskCard() {
    return (
      <div className="w-1/3 p-4 bg-gray-200 rounded card mx-4 my-2">
        <h2 className="text-md font-semibold">Team X</h2>
        <div className="mt-4 space-y-2">
          <div className="bg-white p-2 rounded shadow">
            <p>Task 1</p>
          </div>
          <div className="bg-white p-2 rounded shadow">
            <p>Task 2</p>
          </div>
        </div>
        <div className="bg-green-200 bg-opacity-50 px-3 py-1 mt-5 rounded-full">
          <p className="text-gray-700">Tag</p>
        </div>
      </div>
    );
  }
  
  export default TaskCard;
  