const ProfileCard = ():JSX.Element => {
  return (
    <div className="max-w-md mx-auto bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-100">
        <h2 className="text-lg font-semibold text-gray-900">Hendersor</h2>
      </div>

      <div className="p-6">
        <div className="flex items-start space-x-6">
          <div className="flex flex-col items-center space-y-3">
            <img 
              className="w-20 h-20 rounded-full object-cover border-2 border-gray-200" 
              src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg" 
              alt="profile picture" 
            />
            
            <div className="text-center space-y-2">
              <h3 className="font-bold text-gray-900">Francisco Montejo</h3>
              <p className="text-sm text-gray-600 leading-relaxed break-words max-w-[140px]">
                Passionate developer who loves creating amazing experiences. Always learning something new.
              </p>
            </div>
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex justify-between items-center mb-4 text-center">
              <div className="flex flex-col">
                <span className="text-xl font-bold text-gray-900">5</span>
                <span className="text-sm text-gray-500">Posts</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-gray-900">123</span>
                <span className="text-sm text-gray-500">Followers</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-gray-900">321</span>
                <span className="text-sm text-gray-500">Following</span>
              </div>
            </div>

            <div className="flex flex-col space-y-2">
              <button className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors duration-200">
                Follow
              </button>
              <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors duration-200">
                Edit Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { ProfileCard };