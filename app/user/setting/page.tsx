import React from "react";
import Image from "next/image";
import banner from "../../../public/assets/images/edit/banner.png";
import avatar from "../../../public/assets/images/edit/avatar.png";

export default function Setting() {
  return (
    <div className="text-black dark:text-white">
      <Image className="w-[100vw]" src={banner} alt="banner" />
      <div className="flex justify-center relative -top-10 md:-top-24">
        <div className="p-5 w-5/6 md:w-1/2 bg-[#f1f1f1] dark:bg-[#2a2a2a]">
          <div className="flex flex-col md:flex-row justify-between gap-y-4">
            <div className="flex gap-x-4">
              {" "}
              <Image className=" rounded-xl" src={avatar} alt="banner" />
              <div className="flex flex-col justify-center">
                <h2 className="text-center md:text-left">Update Avatar</h2>
                <p className="text-center md:text-left">
                  PNG, JPG max size 5mb
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center gap-x-4">
              <div>
                <label
                  htmlFor="files"
                  className="flex gap-x-2 items-center cursor-pointer bg-[#d9d9d9] dark:bg-black px-4 py-2 rounded-lg"
                >
                  <svg
                    className="inline"
                    width="27"
                    height="27"
                    viewBox="0 0 27 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      className="fill-black dark:fill-white"
                      d="M9.58003 7.74565L12.5132 4.79963V17.0832C12.5132 17.4229 12.6482 17.7487 12.8884 17.9889C13.1286 18.2292 13.4544 18.3641 13.7941 18.3641C14.1338 18.3641 14.4596 18.2292 14.6998 17.9889C14.94 17.7487 15.075 17.4229 15.075 17.0832V4.79963L18.0082 7.74565C18.1273 7.8657 18.2689 7.96099 18.425 8.02602C18.5811 8.09105 18.7485 8.12453 18.9176 8.12453C19.0867 8.12453 19.2541 8.09105 19.4102 8.02602C19.5663 7.96099 19.708 7.8657 19.827 7.74565C19.9471 7.62657 20.0424 7.48491 20.1074 7.32882C20.1724 7.17273 20.2059 7.00532 20.2059 6.83623C20.2059 6.66713 20.1724 6.49972 20.1074 6.34363C20.0424 6.18754 19.9471 6.04588 19.827 5.9268L14.7035 0.803299C14.5817 0.686688 14.4381 0.595278 14.2808 0.534315C13.969 0.406205 13.6192 0.406205 13.3074 0.534315C13.1501 0.595278 13.0065 0.686688 12.8847 0.803299L7.76118 5.9268C7.64176 6.04623 7.54702 6.18801 7.48239 6.34405C7.41776 6.50009 7.38449 6.66733 7.38449 6.83623C7.38449 7.00512 7.41776 7.17236 7.48239 7.3284C7.54702 7.48444 7.64176 7.62622 7.76118 7.74565C7.88061 7.86507 8.02239 7.95981 8.17843 8.02444C8.33447 8.08908 8.50171 8.12234 8.67061 8.12234C8.8395 8.12234 9.00674 8.08908 9.16278 8.02444C9.31882 7.95981 9.4606 7.86507 9.58003 7.74565ZM25.322 15.8024C24.9823 15.8024 24.6565 15.9373 24.4163 16.1775C24.1761 16.4177 24.0411 16.7435 24.0411 17.0832V22.2067C24.0411 22.5464 23.9062 22.8722 23.666 23.1125C23.4257 23.3527 23.0999 23.4876 22.7602 23.4876H4.82798C4.48827 23.4876 4.16247 23.3527 3.92226 23.1125C3.68205 22.8722 3.5471 22.5464 3.5471 22.2067V17.0832C3.5471 16.7435 3.41215 16.4177 3.17194 16.1775C2.93173 15.9373 2.60594 15.8024 2.26623 15.8024C1.92652 15.8024 1.60072 15.9373 1.36051 16.1775C1.1203 16.4177 0.985352 16.7435 0.985352 17.0832V22.2067C0.985352 23.2259 1.3902 24.2033 2.11083 24.9239C2.83146 25.6445 3.80885 26.0494 4.82798 26.0494H22.7602C23.7794 26.0494 24.7568 25.6445 25.4774 24.9239C26.198 24.2033 26.6029 23.2259 26.6029 22.2067V17.0832C26.6029 16.7435 26.4679 16.4177 26.2277 16.1775C25.9875 15.9373 25.6617 15.8024 25.322 15.8024Z"
                    />
                  </svg>
                  Update
                </label>
                <input id="files" style={{ display: "none" }} type="file" />
              </div>
              <button className="flex gap-x-2 items-center cursor-pointer bg-[#d9d9d9] dark:bg-black px-4 py-2 rounded-lg">
                <svg
                  className="inline"
                  width="27"
                  height="30"
                  viewBox="0 0 27 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="fill-black dark:fill-white"
                    d="M10.6557 23.4119C11.0332 23.4119 11.3952 23.2619 11.6621 22.995C11.929 22.7281 12.0789 22.3661 12.0789 21.9887V13.4495C12.0789 13.072 11.929 12.7101 11.6621 12.4432C11.3952 12.1763 11.0332 12.0263 10.6557 12.0263C10.2783 12.0263 9.91628 12.1763 9.64938 12.4432C9.38247 12.7101 9.23253 13.072 9.23253 13.4495V21.9887C9.23253 22.3661 9.38247 22.7281 9.64938 22.995C9.91628 23.2619 10.2783 23.4119 10.6557 23.4119ZM24.8877 6.33353H19.1949V4.91033C19.1949 3.77797 18.7451 2.69198 17.9444 1.89128C17.1437 1.09058 16.0577 0.640747 14.9253 0.640747H12.0789C10.9466 0.640747 9.86057 1.09058 9.05987 1.89128C8.25917 2.69198 7.80934 3.77797 7.80934 4.91033V6.33353H2.11655C1.7391 6.33353 1.3771 6.48347 1.1102 6.75037C0.843303 7.01727 0.693359 7.37927 0.693359 7.75672C0.693359 8.13418 0.843303 8.49617 1.1102 8.76307C1.3771 9.02997 1.7391 9.17992 2.11655 9.17992H3.53975V24.8351C3.53975 25.9674 3.98958 27.0534 4.79028 27.8541C5.59099 28.6548 6.67697 29.1047 7.80934 29.1047H19.1949C20.3273 29.1047 21.4132 28.6548 22.214 27.8541C23.0147 27.0534 23.4645 25.9674 23.4645 24.8351V9.17992H24.8877C25.2651 9.17992 25.6271 9.02997 25.894 8.76307C26.1609 8.49617 26.3109 8.13418 26.3109 7.75672C26.3109 7.37927 26.1609 7.01727 25.894 6.75037C25.6271 6.48347 25.2651 6.33353 24.8877 6.33353ZM10.6557 4.91033C10.6557 4.53288 10.8057 4.17088 11.0726 3.90398C11.3395 3.63708 11.7015 3.48714 12.0789 3.48714H14.9253C15.3028 3.48714 15.6648 3.63708 15.9317 3.90398C16.1986 4.17088 16.3485 4.53288 16.3485 4.91033V6.33353H10.6557V4.91033ZM20.6181 24.8351C20.6181 25.2125 20.4682 25.5745 20.2013 25.8414C19.9344 26.1083 19.5724 26.2583 19.1949 26.2583H7.80934C7.43188 26.2583 7.06989 26.1083 6.80299 25.8414C6.53608 25.5745 6.38614 25.2125 6.38614 24.8351V9.17992H20.6181V24.8351ZM16.3485 23.4119C16.726 23.4119 17.088 23.2619 17.3549 22.995C17.6218 22.7281 17.7717 22.3661 17.7717 21.9887V13.4495C17.7717 13.072 17.6218 12.7101 17.3549 12.4432C17.088 12.1763 16.726 12.0263 16.3485 12.0263C15.9711 12.0263 15.6091 12.1763 15.3422 12.4432C15.0753 12.7101 14.9253 13.072 14.9253 13.4495V21.9887C14.9253 22.3661 15.0753 22.7281 15.3422 22.995C15.6091 23.2619 15.9711 23.4119 16.3485 23.4119Z"
                  />
                </svg>
                Delete
              </button>
            </div>
          </div>
          <div className="divider"></div>
          <form>
            <h1 className="text-xl">
              Edit your personal information and address.
            </h1>
            <div className="flex flex-col md:flex-row justify-between my-4">
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text text-black dark:text-white">
                    First Name
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="First Name"
                  className="input input-bordered w-full max-w-xs bg-white dark:bg-[#333333]"
                />
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text text-black dark:text-white">
                    Last Name
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Last Name"
                  className="input input-bordered w-full max-w-xs bg-white dark:bg-[#333333]"
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between mb-4">
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text text-black dark:text-white">
                    Phone
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Phone"
                  className="input input-bordered w-full max-w-xs bg-white dark:bg-[#333333]"
                />
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text text-black dark:text-white">
                    Email
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Email"
                  className="input input-bordered w-full max-w-xs bg-white dark:bg-[#333333]"
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="label">
                <span className="label-text text-black dark:text-white">
                  Bio
                </span>
              </label>

              <textarea
                className="textarea w-full bg-white dark:bg-[#333333]"
                placeholder="Bio"
              ></textarea>
            </div>
            <div className="form-control w-full mb-4">
              <label className="label">
                <span className="label-text text-black dark:text-white">
                  Your Website
                </span>
              </label>
              <input
                type="text"
                placeholder="Your Website"
                className="input input-bordered w-full bg-white dark:bg-[#333333]"
              />
            </div>
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text text-black dark:text-white">
                  Connect with Twitter
                </span>
              </label>
              <label className="input-group">
                <span className="dark:bg-[#333333] border-r border-white">
                  <svg
                    width="30"
                    height="24"
                    viewBox="0 0 30 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      className="fill-black dark:fill-white"
                      d="M29.1285 3.20124C28.0376 3.67452 26.8839 3.98738 25.7034 4.13011C26.9489 3.38603 27.8822 2.21546 28.3303 0.835542C27.1599 1.53228 25.8786 2.02318 24.5423 2.28689C23.649 1.31822 22.4595 0.673421 21.1604 0.453622C19.8612 0.233822 18.5258 0.451455 17.3636 1.07239C16.2014 1.69332 15.2782 2.68243 14.7388 3.88459C14.1993 5.08675 14.0741 6.43396 14.3828 7.71494C12.0163 7.59524 9.70143 6.97904 7.58857 5.90636C5.47572 4.83368 3.61215 3.32852 2.11894 1.48865C1.5952 2.40324 1.32 3.43901 1.3207 4.49294C1.31884 5.47171 1.55903 6.43574 2.01989 7.29922C2.48075 8.1627 3.14797 8.89882 3.96215 9.44204C3.01584 9.4163 2.08974 9.16237 1.26264 8.70186V8.77442C1.26973 10.1458 1.75029 11.4726 2.62301 12.5305C3.49574 13.5883 4.70706 14.3123 6.05209 14.5798C5.53433 14.7374 4.99678 14.8205 4.45561 14.8266C4.081 14.8222 3.70733 14.7882 3.33807 14.725C3.7211 15.9046 4.46232 16.9356 5.4586 17.6743C6.45488 18.4131 7.65667 18.8229 8.89674 18.8468C6.80274 20.4945 4.21742 21.3937 1.55291 21.4012C1.06778 21.4028 0.583027 21.3737 0.101562 21.3141C2.82201 23.0706 5.99232 24.003 9.23055 23.9991C11.4652 24.0223 13.682 23.6 15.7516 22.7568C17.8212 21.9137 19.7021 20.6666 21.2843 19.0884C22.8665 17.5103 24.1184 15.6326 24.9669 13.5652C25.8153 11.4978 26.2433 9.282 26.2258 7.04732C26.2258 6.80059 26.2258 6.53934 26.2258 6.2781C27.3647 5.42879 28.347 4.38761 29.1285 3.20124Z"
                    />
                  </svg>
                </span>
                <input
                  type="text"
                  placeholder="Username"
                  className="input input-bordered w-full bg-white dark:bg-[#333333]"
                />
              </label>
            </div>

            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text text-black dark:text-white">
                  Connect with Facebook
                </span>
              </label>
              <label className="input-group">
                <span className="dark:bg-[#333333] border-r border-white">
                  <svg
                    width="31"
                    height="30"
                    viewBox="0 0 31 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <ellipse
                      className="fill-black dark:fill-white"
                      cx="15.8167"
                      cy="14.6321"
                      rx="15.1829"
                      ry="14.5447"
                    />
                    <path
                      className="fill-white dark:fill-[#333333]"
                      d="M16.631 29.2558V19.2126H20.15L20.6769 15.2987H16.631V12.7997C16.631 11.6666 16.9595 10.8943 18.6559 10.8943L20.8195 10.8933V7.39275C19.7723 7.2866 18.7199 7.23517 17.6668 7.23869C14.5475 7.23869 12.4119 9.06262 12.4119 12.4123V15.2988H8.88379V19.2128H12.4118V29.2559L16.631 29.2558Z"
                    />
                  </svg>
                </span>
                <input
                  type="text"
                  placeholder="Username"
                  className="input input-bordered w-full bg-white dark:bg-[#333333]"
                />
              </label>
            </div>

            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text text-black dark:text-white">
                  Connect with Instagram
                </span>
              </label>
              <label className="input-group">
                <span className="dark:bg-[#333333] border-r border-white">
                  <svg
                    width="31"
                    height="30"
                    viewBox="0 0 31 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      className="fill-black dark:fill-white"
                      d="M23.9569 6.00511C23.5982 6.00511 23.2475 6.10701 22.9493 6.29793C22.651 6.48884 22.4185 6.7602 22.2812 7.07769C22.144 7.39517 22.1081 7.74452 22.178 8.08156C22.248 8.4186 22.4208 8.72819 22.6744 8.97118C22.9281 9.21417 23.2512 9.37965 23.6031 9.44669C23.9549 9.51373 24.3196 9.47932 24.651 9.34782C24.9824 9.21631 25.2657 8.99361 25.465 8.70789C25.6643 8.42216 25.7706 8.08623 25.7706 7.74259C25.7706 7.28178 25.5795 6.83985 25.2394 6.514C24.8993 6.18816 24.4379 6.00511 23.9569 6.00511ZM30.9095 9.50903C30.8801 8.30771 30.6452 7.11913 30.2143 5.99063C29.8299 5.02507 29.2318 4.15075 28.461 3.42784C27.7126 2.68568 26.7977 2.11629 25.7857 1.76275C24.6108 1.3373 23.3687 1.10715 22.113 1.08224C20.5108 0.995361 19.9969 0.995361 15.8858 0.995361C11.7747 0.995361 11.2608 0.995361 9.65873 1.08224C8.40295 1.10715 7.16084 1.3373 5.98594 1.76275C4.97581 2.11987 4.06178 2.68877 3.3107 3.42784C2.53597 4.14481 1.9416 5.02117 1.57255 5.99063C1.12843 7.11615 0.888182 8.30605 0.86217 9.50903C0.771484 11.0438 0.771484 11.5361 0.771484 15.4744C0.771484 19.4127 0.771484 19.905 0.86217 21.4398C0.888182 22.6427 1.12843 23.8326 1.57255 24.9582C1.9416 25.9276 2.53597 26.804 3.3107 27.521C4.06178 28.26 4.97581 28.8289 5.98594 29.186C7.16084 29.6115 8.40295 29.8416 9.65873 29.8666C11.2608 29.9534 11.7747 29.9534 15.8858 29.9534C19.9969 29.9534 20.5108 29.9534 22.113 29.8666C23.3687 29.8416 24.6108 29.6115 25.7857 29.186C26.7977 28.8325 27.7126 28.2631 28.461 27.521C29.2352 26.8007 29.8339 25.9256 30.2143 24.9582C30.6452 23.8297 30.8801 22.6411 30.9095 21.4398C30.9095 19.905 31.0002 19.4127 31.0002 15.4744C31.0002 11.5361 31.0002 11.0438 30.9095 9.50903ZM28.1889 21.266C28.1779 22.1851 28.0042 23.0957 27.675 23.9591C27.4337 24.5892 27.0461 25.1586 26.5415 25.6242C26.0512 26.1027 25.4581 26.4733 24.8033 26.7101C23.902 27.0254 22.9515 27.1919 21.992 27.2024C20.4806 27.2748 19.9214 27.2893 15.9463 27.2893C11.9712 27.2893 11.412 27.2893 9.90056 27.2024C8.90436 27.2203 7.91241 27.0733 6.96837 26.768C6.34231 26.5191 5.77639 26.1495 5.30579 25.6821C4.80413 25.217 4.42136 24.6471 4.18733 24.017C3.81832 23.1413 3.61365 22.21 3.58275 21.266C3.58275 19.8181 3.49207 19.2824 3.49207 15.4744C3.49207 11.6664 3.49207 11.1307 3.58275 9.68278C3.58953 8.74317 3.76859 7.81201 4.11176 6.93177C4.37784 6.32062 4.78626 5.77584 5.30579 5.33907C5.76499 4.84124 6.33249 4.44585 6.96837 4.18075C7.88967 3.86227 8.86068 3.69582 9.8401 3.68846C11.3515 3.68846 11.9108 3.60159 15.8858 3.60159C19.8609 3.60159 20.4201 3.60159 21.9316 3.68846C22.891 3.699 23.8416 3.86546 24.7429 4.18075C25.4297 4.42494 26.0462 4.82195 26.5415 5.33907C27.0368 5.78384 27.4238 6.3276 27.675 6.93177C28.011 7.81344 28.1848 8.74422 28.1889 9.68278C28.2645 11.1307 28.2796 11.6664 28.2796 15.4744C28.2796 19.2824 28.2645 19.8181 28.1889 21.266ZM15.8858 8.04665C14.353 8.04951 12.8554 8.48758 11.5823 9.30548C10.3092 10.1234 9.31771 11.2844 8.73317 12.6419C8.14863 13.9994 7.99724 15.4924 8.29812 16.9323C8.599 18.3722 9.33866 19.6944 10.4236 20.7317C11.5086 21.769 12.8902 22.475 14.3938 22.7605C15.8975 23.0459 17.4557 22.898 18.8716 22.3353C20.2876 21.7727 21.4976 20.8207 22.3489 19.5995C23.2003 18.3784 23.6546 16.9428 23.6546 15.4744C23.6566 14.4972 23.4569 13.5293 23.067 12.6263C22.6771 11.7233 22.1047 10.9031 21.3827 10.2128C20.6607 9.52249 19.8034 8.97574 18.86 8.60399C17.9167 8.23224 16.9059 8.04283 15.8858 8.04665ZM15.8858 20.2959C14.8904 20.2959 13.9173 20.0131 13.0896 19.4833C12.2619 18.9535 11.6168 18.2005 11.2359 17.3195C10.8549 16.4385 10.7553 15.469 10.9495 14.5338C11.1437 13.5985 11.623 12.7394 12.3269 12.0651C13.0308 11.3908 13.9276 10.9316 14.9039 10.7455C15.8803 10.5595 16.8922 10.655 17.8119 11.0199C18.7316 11.3848 19.5177 12.0028 20.0707 12.7957C20.6237 13.5886 20.9189 14.5208 20.9189 15.4744C20.9189 16.1076 20.7887 16.7345 20.5358 17.3195C20.2829 17.9045 19.9121 18.436 19.4448 18.8837C18.9774 19.3314 18.4226 19.6866 17.8119 19.9289C17.2013 20.1712 16.5468 20.2959 15.8858 20.2959Z"
                    />
                  </svg>
                </span>
                <input
                  type="text"
                  placeholder="Username"
                  className="input input-bordered w-full bg-white dark:bg-[#333333]"
                />
              </label>
            </div>
            <div className="flex gap-x-4 mt-8 mb-4">
              <button className="bg-[#d9d9d9] dark:bg-black px-4 py-2">
                Submit
              </button>
              <button className="bg-[#d9d9d9] dark:bg-black px-4 py-2">
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
