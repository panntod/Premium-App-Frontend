import React from "react";

import { CustomButton, Navbar } from "../../components";
import benefitPhoto from "../../assets/benefitPhoto.svg";
import mainPhoto from "../../assets/mainPhoto.svg";
import {
  IoPeople,
  IoSwapHorizontal,
  IoBagCheck,
  IoStar,
  IoLockClosed,
  IoCall,
  IoCheckmark,
  IoCard,
  IoNotifications,
  IoCut,
  IoSearch,
} from "react-icons/io5";

const dumpDataLayanan = [
  {
    nama: "Youtube",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/YouTube_social_white_square_%282017%29.svg/800px-YouTube_social_white_square_%282017%29.svg.png",
    deskripsi: "Youtube Pro",
    tier: "Premium",
    harga: 70000,
  },
  {
    nama: "Spotify",
    image: "https://modcombo.io/uploads/2023/2/spotify-music-podcasts-lit-thumbnail.jpg",
    deskripsi: "Spotify Pro",
    tier: "Common",
    harga: 43000,
  },
  {
    nama: "Netflix",
    image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAA0lBMVEUAAACxBg/lCRNbCg2lDRI6BQa7BQyuBxEAAAazBgwAAAOtBg65BRCwBw0jBAWuCRR3DhNuDA0ABADiCxOpBg7sBhSeBQ6PBA3hDBemBg6bBA+VBA6iBRBTCAgABAQAAAoxBgXbDBnLCxYNAAOIAA2AAAtHBg09BAUrAwRwFBd8CxB2Eg48DgYVBgnPER/tCBnzBhLiEgq9CRsqBgYQCQCHERitCxsnCBCPAg/5BxtJDgeaExrRDCTmCBpkDQ2kDR0zAAwdBQOEEhzdDx6EAAVNDRbvKQNvAAAIU0lEQVR4nO2dbXPbNhKASeiNIvViAwTfQNOmRDqJepZsp3YZ+5TWV+f//6UDKDtWJexNrjdz8XL2+ZB2JpwOn+5ydwFSpOMQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEG8V3zf8SwU53x5eCh3iv/0n3mnfPy0OrGx+uUflnO++nRq5eT0wvv/n/uP8WG92Uh2iGTXN7dHhp5/MZmMx5NjxsPezzj5H+LzWm6ljTL59fBY7s1GdubD3rvN0ouUiaMQaoRkq6NL0Z/NXSujYe/dZumgX9oEmdiIW748CAxOw2xoNTSSF/zgYJyG/RFkKFfFgSJOwzS0p6nmqJriNAxD97hbvARxcHAwTsPRKIIE5V0XKs3FPIgWQBA3twenjdTQDUfWjshYsrn868FYDV2V2A23N8r5SzVFaTjoj91oCNWaxdLbV8RrGABBZLLHu2A4SpW1JQrB5H03snTUmMnNWm4Ws/1FL17DzKSpzVDoNN07GK9hrhZsYwthct3fPxivYRhPrIKM3ZQXzlvHQGvojlTEEqBjnHTDMNJpai2nkt06/Pt0itgwr6bWEAoptr/x5Ws9xWs4DrJn4EJk8u5tuwaxYRjF9jTV3L7tA2M2zJs5ZMgezl9LDV5DN0izWAj7IkrW+A21Y5rXYJquv3eLArFhEMUp0BHFl4fXs0dr+JKmQBBv5KP/0vQxG05TVU3shlL8Uwu2DQOzoRtmTWRfB2/F5uvLWIPacJQ1FbA1XH753dltZqCtpe055lkNbg0vPvJzc7A/SwO8hv2sAtKUsc2nXZpiNhy7aaTAligD/yVL8Rrqk9TVdMzsUdyUf7SzKW7DIFRVDMRQr4M7EMNA94t6IYFb3pNOGOaq6kthXyeKgbfk2rCP2FAPbuoZuIMhbzYrT6/0jaFVEYthFsfATX3B1o7noDcMI/Wcbu0bw0Jc+sYwx2zohlFWVSUw11zfeb42zNIwsEgiMdSDWwwtMJi8vSrwG6ZRXGWAYSJ7Jksj1Iau6RdxKYCdU3VuYpiniA2nYZumwGZGubji/pPCbhjpIFqrqbkSPxnD9kLEahiEaaaqlb3pi2t2z72Z0mka4jUMgkjFq6F1NhVMls75rNGGFkU0huZCrNXWGkOh18HeU6MicyViNlTVL8Bsyja3/qxRGWJDragX+lXdh7ZrxMVTrTLdEqeHjngMdUfUTR/armF3vDFBPG76iAz1+qKqFpDhmleNCSJaQ7OCMmmaAoIJe7jrgmGsJzfoSnxc6SBGx00fkWFbTeuJ/QEpKbZ1FduqKSJDvb5QTZ3bDZnYZHUTt2mK1jBIzfStFxhAmk50ELMoP7wQkRmaNIUMS62vx5rDCxGRYZiaWqPTFEDm9bOupnhjuBtrdEsEnlVkbFHraprn6QizYaaaZ2i7xqTpbvrGa2j6haoVgzYzRnXV9gvEhjqIcVVDTV8ujOFhrUFl2KaprqbQc24mTbMMtaHZrYkrlQBNn7l1bJp+iNRwl6aqXWAAN9oWZnJDbKiH71ynaVynG6Dri7iOD7fccBmGqUnTWkGPRes0NdU0DNEajtog6jSFqmlZ6yDmeGNorsQ2TeuN/bkFsVH1YdNHZ2iafvWwBm7qv6QpakPTEuOLx628sRomlV5CITZ0XwwHZ/bfYOjIqrZfIDZsF4nq0gFqjZDDVdVE+8sLdIahqaaXzr+uge1vUdeNGU0RG+ogZpf8w431FoZO0/u6ySK8hm3Tz6JL7sC/ntX9ItvbNsVoGGlDfgcZlnoFme2NpugMTTXNLws+AF8oMV+1Yw1WQ7OGyvMHb8lvy2v73rBZB2M3TB88p6gTBjy3kFXxXkdEaBim6ZnHzz//CY3fkzrOUrSVpm36oTb0nLndcHuzMIZhMEZtaP76FHjcVCZNrdIUcwznrSGfrcE0XZmtjClWQ90SwzPzA4TzDGyJuunnmA2n853hV0CQCVWpKESbpd8N+dUCMpw8v/ULvIY+B9NUlM9VhtjQnQZn+pz5svjGgMf3ZXSn8lGA3dAvnLUENvgnehkcYo+h4yydO/tLQTYsiZvXNMVoOJ6+Gl4mVkMpk7R6HdxQGrpnL+dcLOy735ItqjjvgiGvoP39rWoixIbjV0P/AnxPVlBF4Qir4XTy/Zz5LTSbrvUyuBOGJ9D94CSLow4Ycm8GbNcIGVZZu5WB21DzeA2U08VLmiI35M6ptN+GYkkUR/hjqAfw3+x3MDZCTnaDG3pD5952m81QVqoDWarp2bdNmRBZbEZT/IbOn0AM9eQWdSGGnP8OGZaN6kQMeQ96pFbMm7ALhku+gIK4VmkHDH3uNwy6g6HyDhia4wTwVhDpqnknDDnwJJ+e3HSadsHQu7OPpkImUd4JQ38A/lTIzdx5BwydYgI+thCNuhBDpwDXwSzNu2DIvc/gw+3jrAuGS+7cS6CcllEXrkPd9KHJTSRB2gFDjxdXwK5iIod5BwwNj8Bmhihztwd/ku0n898Y9r7Yi40QbkcM/TU01yymCAzH42C697PC8bR3+D0rx3u83g+c+XO7MyzH7/fLcu1bdrVdMDamw92n8IZD/S/HhsWD+UHb7sNz5h9vzSMZnv2Mk/8hdjEcT8Zzd+jOzRvNqnp1evq115sd5V2xPHl8fOy77mSxKMtSyI3uFDvL8uzdfjvvQ98dpXnW1KdfLwcfPz8tfc/3zXctneNvWC7Pdxq+s3z6OPjW+3rS9F3tmmyu5fu9Dp8ezj48LYu/fX5e8ets0Du9+/ZuDTl3eKHjVvydLNPB5oXnta+KfrdZalLyf/jfb6oR54VzVJUIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgkDDvwE60/6WUqeX3AAAAABJRU5ErkJggg==",
    deskripsi: "Spotify Pro",
    tier: "Common",
    harga: 43000,
  },
  {
    nama: "Apple Music",
    image: "https://store-images.s-microsoft.com/image/apps.62962.14205055896346606.c235e3d6-fbce-45bb-9051-4be6c2ecba8f.28d7c3cb-0c64-40dc-9f24-53326f80a6dd?h=464",
    deskripsi: "Spotify Pro",
    tier: "Premium",
    harga: 70000,
  },
  {
    nama: "Disney+",
    image: "https://i.insider.com/5dc5bb0e3afd37438b304b78",
    deskripsi: "Spotify Pro",
    tier: "Rare",
    harga: 57000,
  },
  {
    nama: "Apple TV+",
    image: "https://store-images.s-microsoft.com/image/apps.33669.13698947292982888.42b129d6-e0ca-4fa1-9608-c35388dbfbc8.8843d1f9-6d39-41c7-b96a-5f01fad44842",
    deskripsi: "Spotify Pro",
    tier: "Rare",
    harga: 57000,
  },
];

const cardData = [
  {
    icon: <IoPeople className="text-white text-4xl" />,
    value: "10+",
    title: "Pengguna",
  },
  {
    icon: <IoSwapHorizontal className="text-white text-4xl" />,
    value: "20+",
    title: "Transaksi",
  },
  {
    icon: <IoBagCheck className="text-white text-4xl" />,
    value: "30+",
    title: "Layanan",
  },
  {
    icon: <IoStar className="text-white text-4xl" />,
    value: "9.5 / 10",
    title: "Kepuasan",
  },
];

const Dashboard = () => {
  return (
    <Navbar>
      {/* Landing Page */}
      <main className="h-screen flex flex-col-reverse items-center justify-center sm:flex-row">
        <section className="md:w-[600px]">
          <h1 className="text-primary-dark font-extrabold text-4xl md:text-6xl mb-6">
            Patungan Layanan Premium Legal
          </h1>
          <p className="text-primary text-xl font-medium mb-6">
            Cek pilihan layanan di Lorem sekarang
          </p>
          <CustomButton
            className="bg-gradient-to-r from-primary-dark to-secondary font-bold text-white w-[140px] md:w-[220px] h-[40px] md:h-12"
            type="button"
            onClick={null}
          >
            Lihat Layanan
          </CustomButton>
        </section>
        <div className="md:h-[600px] md:w-[600px] flex items-center justify-end">
          <img src={mainPhoto} alt="main photo" />
        </div>
      </main>
      {/* End Landing Page */}

      {/* Information Section */}
      <section
        id="information"
        className="flex flex-col justify-center items-center"
      >
        <div className="text-center md:w-[680px] mb-14">
          <h1 className="text-3xl md:text-4xl text-primary-dark font-bold mb-6">
            Jadilah Bagian Dari Lorem!
          </h1>
          <p className="text-lg md:text-xl text-primary md:font-semibold">
            Dapatkan manfaat Patungan Berlangganan. Nikmati layanan premium
            dengan lebih hemat, aman dan legal
          </p>
        </div>

        {/* Card Container*/}
        <div className="flex flex-wrap gap-8 md:gap-16 mb-36">
          <div className="flex flex-wrap gap-8 md:gap-16">
            {cardData.map((card, index) => (
              <div
                key={index}
                className="w-full md:w-[275px] h-[300px] flex-shrink-0 flex flex-col justify-center items-center bg-white rounded-2xl shadow"
              >
                <div className="w-[80px] h-[80px] rounded-full bg-primary flex items-center justify-center mb-4">
                  {card.icon}
                </div>
                <span className="text-2xl font-semibold mb-4 text-primary-dark">
                  {card.value}
                </span>
                <h1 className="text-4xl font-extrabold text-primary">
                  {card.title}
                </h1>
              </div>
            ))}
          </div>
        </div>
        {/* End Card Container */}

        <div className="mb-36">
          <h1 className="text-2xl md:text-4xl text-primary-dark font-bold mb-6 text-center">
            Beragam Manfaat <br /> Yang Bisa Kamu Dapatkan
          </h1>

          {/* Benefit Section */}
          <div id="benefit">
            <img
              src={benefitPhoto}
              alt="Benefit Photo"
              className="sm:block md:hidden mb-4"
            />

            <div className="flex">
              <div className="flex-col space-y-12 md:space-y-24">
                <div className="flex justify-start">
                  <div className="w-8 h-8 md:w-12 md:h-12 bg-primary rounded-xl mr-5 flex justify-center items-center">
                    <IoCut className="text-white text-md md:text-2xl" />
                  </div>
                  <h3 className="text-xl font-semibold md:text-2xl md:font-bold text-primary w-[140px] md:w-[220px] h-[74px]">
                    Hemat Hingga 70%
                  </h3>
                </div>
                <div className="flex justify-start">
                  <div className="w-8 h-8 md:w-12 md:h-12 bg-primary rounded-xl mr-5 flex justify-center items-center">
                    <IoLockClosed className="text-white text-md md:text-2xl" />
                  </div>
                  <h3 className="text-xl font-semibold md:text-2xl md:font-bold text-primary w-[140px] md:w-[220px] h-[74px]">
                    Privasi Terjamin
                  </h3>
                </div>
                <div className="flex justify-start">
                  <div className="w-8 h-8 md:w-12 md:h-12 bg-primary rounded-xl mr-5 flex justify-center items-center">
                    <IoCall className="text-white text-md md:text-2xl" />
                  </div>
                  <h3 className="text-xl font-semibold md:text-2xl md:font-bold text-primary w-[140px] md:w-[220px] h-[74px]">
                    Customer Service <br />
                    Responsif
                  </h3>
                </div>
              </div>

              <img
                src={benefitPhoto}
                alt="Benefit Photo"
                className="hidden md:block"
              />

              <div className="flex-col space-y-12 md:space-y-24">
                <div className="flex justify-end">
                  <h3 className="text-xl font-semibold md:text-2xl md:font-bold text-primary w-[140px] md:w-[220px] h-[74px]">
                    Beragam Metode Pembayaran
                  </h3>
                  <div className="w-8 h-8 md:w-12 md:h-12 bg-primary rounded-xl ml-5 flex justify-center items-center">
                    <IoCard className="text-white text-md md:text-2xl" />
                  </div>
                </div>
                <div className="flex justify-end">
                  <h3 className="text-xl font-semibold md:text-2xl md:font-bold text-primary w-[140px] md:w-[220px] h-[74px]">
                    Layanan Legal dan Resmi
                  </h3>
                  <div className="w-8 h-8 md:w-12 md:h-12 bg-primary rounded-xl ml-5 flex justify-center items-center">
                    <IoCheckmark className="text-white text-md md:text-2xl" />
                  </div>
                </div>
                <div className="flex justify-end">
                  <h3 className="text-xl font-semibold md:text-2xl md:font-bold text-primary w-[140px] md:w-[220px] h-[74px]">
                    Pengingat Pembayaran
                  </h3>
                  <div className="w-8 h-8 md:w-12 md:h-12 bg-primary rounded-xl ml-5 flex justify-center items-center">
                    <IoNotifications className="text-white text-md md:text-2xl" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End Benefit Section */}
        </div>
      </section>
      {/* End Information Section */}

      {/* Layanan Container */}
      <section id="layanan" className="w-full md:w-[1270px] mx-auto">
        <header className="w-full mb-12">
          <h1 className="text-2xl md:text-4xl text-primary-dark font-bold mb-6">
            Belangganan Produk Digital
          </h1>
          <form
            className="flex items-center text-gray-100 px-4 w-full md:w-[500px] h-[40px] rounded-md border-2 border-primary bg-white shadow-md p-4"
            onSubmit={null}
          >
            <IoSearch className="text-2xl text-primary" />
            <input
              type="search"
              name="Search"
              placeholder="Search"
              className="pl-4 text-gray-500 text-lg font-medium outline-none w-full"
              autoComplete="off"
              value={null}
              onChange={null}
            />
          </form>
        </header>

        <main className="flex flex-wrap items-start gap-20">
          {dumpDataLayanan.map((data, index) => (
            <div
              key={index}
              className="w-full md:w-[370px] h-[420px] rounded-xl shadow bg-white flex flex-col p-7"
            >
              <div className="flex flex-col">
                <div className="flex items-center mb-2">
                  <div className="w-20 h-20 rounded-lg overflow-hidden mr-4">
                    <img src={data.image} alt={data.nama} />
                  </div>
                  <h1 className="text-2xl font-semibold text-primary-dark">
                    {data.nama}
                  </h1>
                </div>
                <span className="text-base font-semibold md:text-lg md:font-bold text-primary mb-2">
                  {data.tier}
                </span>
                <h2 className="text-lg font-semibold md:text-2xl md:font-bold text-primary">
                  Rp.{data.harga}{" "}
                  <span className="text-gray-400 text-base">/bulan</span>
                </h2>
              </div>
              <CustomButton
                className="bg-gradient-to-r from-primary-dark to-secondary font-bold text-white w-full h-12 mt-auto"
                type="button"
                onClick={null}
              >
                Pesan
              </CustomButton>
            </div>
          ))}
        </main>
      </section>
      {/* End Layanan Container */}
    </Navbar>
  );
};

export default Dashboard;
