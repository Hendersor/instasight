const ProfileCard = () => {
  return (
    <div className="w-full h-[40%] flex justify-around flex-col items-top border border-gray-300 rounded-b-xl shadow-lg bg-white p-4">
    <div className="w-full h-8 px-[10px]">
      <h3>Hendersor</h3>
    </div>

    <div className="w-full h-[82%] flex items-center">
      <figure className="w-1/3 h-full flex flex-col items-center">
        <img className="rounded-full w-5/6 h-[85px] object-cover mx-auto" src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg" alt="profile picture" />
        <button className="w-[90px] h-[28px] text-[15px] flex justify-center items-center rounded-md mt-1 cursor-pointer bg-blue-500 text-white hover:bg-blue-600 transition">
          Follow
        </button>
      </figure>

      <div className="w-2/3 h-full flex flex-col items-center">
        <div className="w-full h-[30%] text-[15px] flex justify-center items-center text-center">
          <h4>Posts 5</h4>
          <h4>Followers 123</h4>
          <h4>Following 321</h4>
        </div>

        <div className="max-w-2xl w-full h-[70px] flex flex-col justify-between break-words px-[5px]">
          <h3 className="font-bold">Francisco Montejo</h3>
          <h3 className="text-[13px]">
            sdflalskdfljasldfjlsakdjfljsalkflasjdfjasdflsadjflsajdlfksaldkfsaldjlkj
          </h3>
        </div>
      </div>
    </div>
  </div>
  )
}

export {ProfileCard}