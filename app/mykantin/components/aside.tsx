export const Aside = () => {
  return (
    <aside className="bg-[#FCFCFCE5] backdrop-blur-md  fixed right-0 z-40 h-full px-4 w-[375px]">
      <div className="flex justify-end p-4">
        <div className="flex space-x-6  items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="33"
            height="37"
            viewBox="0 0 33 37"
            fill="none"
          >
            <path
              d="M33 26.5833C33 27.28 32.615 27.885 32.0283 28.1967L17.545 36.3367C17.2517 36.5567 16.885 36.6667 16.5 36.6667C16.115 36.6667 15.7483 36.5567 15.455 36.3367L0.971673 28.1967C0.677753 28.0422 0.431779 27.8102 0.260474 27.5257C0.0891697 27.2413 -0.000915146 26.9154 7.00928e-06 26.5833V10.0833C7.00928e-06 9.38667 0.385007 8.78166 0.971673 8.47L15.455 0.33C15.7483 0.11 16.115 0 16.5 0C16.885 0 17.2517 0.11 17.545 0.33L32.0283 8.47C32.615 8.78166 33 9.38667 33 10.0833V26.5833ZM16.5 3.94167L13.035 5.90333L23.8333 12.1183L27.4267 10.0833L16.5 3.94167ZM5.57334 10.0833L16.5 16.225L20.0933 14.2083L9.31334 7.975L5.57334 10.0833ZM3.66667 25.5017L14.6667 31.6983V19.3967L3.66667 13.2183V25.5017ZM29.3333 25.5017V13.2183L18.3333 19.3967V31.6983L29.3333 25.5017Z"
              fill="#414141"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="28"
            viewBox="0 0 33 28"
            fill="none"
          >
            <path
              d="M16.5 28L14.1075 25.9858C5.61 18.8599 0 14.145 0 8.39237C0 3.67738 3.993 0 9.075 0C11.946 0 14.7015 1.23597 16.5 3.17384C18.2985 1.23597 21.054 0 23.925 0C29.007 0 33 3.67738 33 8.39237C33 14.145 27.39 18.8599 18.8925 25.9858L16.5 28Z"
              fill="#414141"
            />
          </svg>
          <button className="bg-primary-yellow cursor-pointer rounded-full w-[35px] h-[35px]">
            3
          </button>
          <picture className="cursor-pointer">
            <img
              src="https://images.unsplash.com/photo-1450133064473-71024230f91b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Christopher Campbell"
              className=" rounded-full object-cover w-[35px] h-[35px]"
            />
          </picture>
        </div>
      </div>
      <h1 className="text-[#414141] font-semibold text-3xl pb-5">
        Pesanan Saya
      </h1>

      <div className="bg-[#6455C2] text-white rounded-2xl w-[340px] space-y-4 p-3">
        <p className=" font-light text-base">Mr. Rizqi</p>
        <h1 className="font-medium text-lg">Rp. 1.000.000,-</h1>
        <p className=" font-light text-base">
          3 7 5 8 * * * * * * * * * * 8 9 1 3
        </p>
      </div>

      <div className="flex justify-between py-5 items-center">
        <div className="bg-[#FFF7ED] w-16 h-10 flex items-center justify-center rounded-2xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="22"
            viewBox="0 0 40 22"
            fill="none"
          >
            <path
              d="M27.2727 0H9.09091L0 10.9091V16.3636H3.63636C3.63636 17.8103 4.21104 19.1977 5.23396 20.2206C6.25689 21.2435 7.64427 21.8182 9.09091 21.8182C10.5375 21.8182 11.9249 21.2435 12.9479 20.2206C13.9708 19.1977 14.5455 17.8103 14.5455 16.3636H25.4545C25.4545 17.8103 26.0292 19.1977 27.0521 20.2206C28.0751 21.2435 29.4625 21.8182 30.9091 21.8182C32.3557 21.8182 33.7431 21.2435 34.766 20.2206C35.789 19.1977 36.3636 17.8103 36.3636 16.3636H40V10.9091C40 8.89091 38.3818 7.27273 36.3636 7.27273H32.7273L27.2727 0ZM10 2.72727H17.2727V7.27273H6.36364L10 2.72727ZM20 2.72727H26.3636L29.9273 7.27273H20V2.72727ZM9.09091 13.6364C9.81423 13.6364 10.5079 13.9237 11.0194 14.4352C11.5308 14.9466 11.8182 15.6403 11.8182 16.3636C11.8182 17.087 11.5308 17.7806 11.0194 18.2921C10.5079 18.8036 9.81423 19.0909 9.09091 19.0909C8.36759 19.0909 7.6739 18.8036 7.16244 18.2921C6.65097 17.7806 6.36364 17.087 6.36364 16.3636C6.36364 15.6403 6.65097 14.9466 7.16244 14.4352C7.6739 13.9237 8.36759 13.6364 9.09091 13.6364ZM30.9091 13.6364C31.6324 13.6364 32.3261 13.9237 32.8376 14.4352C33.349 14.9466 33.6364 15.6403 33.6364 16.3636C33.6364 17.087 33.349 17.7806 32.8376 18.2921C32.3261 18.8036 31.6324 19.0909 30.9091 19.0909C30.1858 19.0909 29.4921 18.8036 28.9806 18.2921C28.4692 17.7806 28.1818 17.087 28.1818 16.3636C28.1818 15.6403 28.4692 14.9466 28.9806 14.4352C29.4921 13.9237 30.1858 13.6364 30.9091 13.6364Z"
              fill="#FB6D3A"
            />
          </svg>
        </div>
        <p>jl. suzume</p>
        <h3>Gratis</h3>
      </div>

      <div className="flex flex-col absolute bottom-5 left-0 right-0 p-3">
        <span className="mb-3 flex justify-between items-center">
          <h1 className="font-semibold text-xl">Total: </h1>
          <h1 className="font-semibold text-xl">RP.68.000</h1>
        </span>
        <button className="w-full justify-center gap-2 h-[53px] font-semibold bg-primary-yellow flex  rounded-2xl items-center ">
          Pesan sekarang &gt;{" "}
        </button>
      </div>
    </aside>
  );
};
