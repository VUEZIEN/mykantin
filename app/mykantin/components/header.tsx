export const Head = () => {
  return (
    <header className="fixed top-0 p-4 left-0 right-0 z-30 bg-white">
      <nav className="flex justify-between max-w-5xl ">
        <div className="flex items-center space-x-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
          >
            <path
              d="M40 2L16 4.82V8H40V10H16V20H40C40 23.62 38.86 26.92 36.64 29.9C34.42 32.88 31.54 35.06 28 36.5V40H12V36.5C8.48 35.06 5.58 32.86 3.36 29.9C1.14 26.94 0 23.62 0 20H6V4L40 0V2ZM8 5.76V8H10V5.56L8 5.76ZM8 10V20H10V10H8ZM14 20V10H12V20H14ZM14 8V5.1L12 5.28V8H14Z"
              fill="#FB6D3A"
            />
          </svg>
          <h1 className="flex text-primary-orange after:content-['Kantin'] after:text-primary-purple font-semibold text-3xl">
            My
          </h1>
        </div>
        <div className="relative">
          <input
            type="search"
            name="search"
            id="#search"
            placeholder="cari makan bang?"
            className="w-[500px] h-full bg-[#EEEEEE33] rounded-xl pl-10 focus:ring-2 focus:ring-blue-500 outline-none"
          />

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="23"
            height="23"
            viewBox="0 0 25 30"
            fill="none"
            className="absolute left-2 top-2.5"
          >
            <path
              d="M10.4 0C13.1583 0 15.8035 0.978313 17.7539 2.71972C19.7043 4.46113 20.8 6.82299 20.8 9.28571C20.8 11.5857 19.856 13.7 18.304 15.3286L18.736 15.7143H20L28 22.8571L25.6 25L17.6 17.8571V16.7286L17.168 16.3429C15.2809 17.7811 12.8811 18.5713 10.4 18.5714C7.64175 18.5714 4.99647 17.5931 3.04609 15.8517C1.09571 14.1103 0 11.7484 0 9.28571C0 6.82299 1.09571 4.46113 3.04609 2.71972C4.99647 0.978313 7.64175 0 10.4 0ZM10.4 2.85714C6.4 2.85714 3.2 5.71429 3.2 9.28571C3.2 12.8571 6.4 15.7143 10.4 15.7143C14.4 15.7143 17.6 12.8571 17.6 9.28571C17.6 5.71429 14.4 2.85714 10.4 2.85714Z"
              fill="#414141"
            />
          </svg>
        </div>
      
      </nav>
    </header>
  );
};
