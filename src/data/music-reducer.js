import { aydymAPI } from "./../api/api";

const SET_MUSICS = "SET_MUSICS";
const SET_TOTAL = "SET_TOTAL";
const SET_ARTIST = "SET_ARTIST";

let initialState = {
  musics: [
    {
      id: 790,
      name: "Aydayozin ",
      verified: true,
      shareUrl: "https://aydym.com/artist/790/aydayozin",
      image: {
        small:
          "https://storage.aydym.com/images/thumbnail/2024/09/13/81254b49-49a6-45e8-b8f5-fd24a3bb0941.webp",
        url: "https://storage.aydym.com/images/thumbnail/2024/09/13/b7e800cb-0380-414a-96a0-ccaf6ea463e4.webp",
      },
      slug: "aydayozin",
    },
    {
      id: 8,
      name: "Azat Dönmezow",
      verified: true,
      shareUrl: "https://aydym.com/artist/8/azat-donmezow",
      image: {
        small:
          "https://storage.aydym.com/images/thumbnail/2024/10/11/2858a566-bc4e-4611-81ee-79453341585d.webp",
        url: "https://storage.aydym.com/images/thumbnail/2024/10/11/96c0f8dd-0331-4475-869e-a437b52194c7.webp",
      },
      slug: "azat-donmezow",
    },
    {
      id: 827,
      name: "DZ-ED",
      verified: true,
      shareUrl: "https://aydym.com/artist/827/dz-ed",
      image: {
        small:
          "https://storage.aydym.com/images/thumbnail/2023/01/25/3d1a3d55-6ed5-4372-9fb9-f3ff19d7ed78.webp",
        url: "https://storage.aydym.com/images/thumbnail/2023/01/25/963d1c2e-8ac4-4cf7-bcbd-3a9c37ff9ee9.webp",
      },
      slug: "dz-ed",
    },
    {
      id: 17,
      name: "Amalia Zehin",
      verified: true,
      shareUrl: "https://aydym.com/artist/17/amalia-zehin",
      image: {
        small:
          "https://storage.aydym.com/images/thumbnail/2023/10/28/31c0c0ec-5b56-4bcf-a024-d72c01b8f29f.webp",
        url: "https://storage.aydym.com/images/thumbnail/2023/10/28/1678e9ef-18f4-4f67-a00a-d6206d07087e.webp",
      },
      slug: "amalia-zehin",
    },
    {
      id: 15,
      name: "Hemra Rejepow",
      verified: true,
      shareUrl: "https://aydym.com/artist/15/hemra-rejepow",
      image: {
        small:
          "https://storage.aydym.com/images/thumbnail/2024/06/19/18022c75-6920-4d68-91e7-621f90b8e870.webp",
        url: "https://storage.aydym.com/images/thumbnail/2024/06/19/c4046de9-ce77-4b66-9a5b-bd4ad560a81f.webp",
      },
      slug: "hemra-rejepow",
    },
    {
      id: 354,
      name: "Aýlara Baýriýewa",
      verified: true,
      shareUrl: "https://aydym.com/artist/354/aylara-bayriyewa",
      image: {
        small:
          "https://storage.aydym.com/images/thumbnail/2024/05/06/b8e3ff4c-65ba-46dd-ad56-aa32ead282e7.webp",
        url: "https://storage.aydym.com/images/thumbnail/2024/05/06/00adfcc7-98f8-4e93-9a90-e21099db9cb0.webp",
      },
      slug: "aylara-bayriyewa",
    },
    {
      id: 360,
      name: "Mad Nazarow",
      verified: true,
      shareUrl: "https://aydym.com/artist/360/mad-nazarow",
      image: {
        small:
          "https://storage.aydym.com/images/thumbnail/2023/11/29/8ce7245e-accd-4847-a0e2-2d8d1df207ba.webp",
        url: "https://storage.aydym.com/images/thumbnail/2023/11/29/a0e82c92-db63-475d-9fb0-a5d29a22fa4b.webp",
      },
      slug: "mad-nazarow",
    },
    {
      id: 24,
      name: "Hajy Ýazmämmedow",
      verified: true,
      shareUrl: "https://aydym.com/artist/24/hajy-yazmammedow",
      image: {
        small:
          "https://storage.aydym.com/images/thumbnail/2024/06/20/953fa0b7-d9dd-441d-a62f-a9960bdaa95a.webp",
        url: "https://storage.aydym.com/images/thumbnail/2024/06/20/e7c5498d-83dd-49ef-9c66-cd6d7b4fe3b9.webp",
      },
      slug: "hajy-yazmammedow",
    },
    {
      id: 106,
      name: "Jeren Halnazarowa",
      verified: true,
      shareUrl: "https://aydym.com/artist/106/jeren-halnazarowa",
      image: {
        small:
          "https://storage.aydym.com/images/thumbnail/2022/07/19/eef1a54b-86c7-4a20-b756-5317ef4c5846.webp",
        url: "https://storage.aydym.com/images/thumbnail/2022/07/19/9ec1e4ae-5f75-482b-a3d9-5df756bf7c89.webp",
      },
      slug: "jeren-halnazarowa",
    },
    {
      id: 571,
      name: "Burak Bulut",
      verified: false,
      shareUrl: "https://aydym.com/artist/571/burak-bulut",
      image: {
        small:
          "https://storage.aydym.com/images/thumbnail/2024/06/28/21d8cb87-8822-4ddc-90fa-6610d204cedf.webp",
        url: "https://storage.aydym.com/images/thumbnail/2024/06/28/236f86bd-5f2d-41f0-9cd4-fef1597f47db.webp",
      },
      slug: "burak-bulut",
    },
    {
      id: 35,
      name: "Söhbet Jumaýew",
      verified: true,
      shareUrl: "https://aydym.com/artist/35/sohbet-jumayew",
      image: {
        small:
          "https://storage.aydym.com/images/thumbnail/2022/08/17/098992cf-5900-47f9-84b1-b789ff97513c.webp",
        url: "https://storage.aydym.com/images/thumbnail/2022/08/17/90a840aa-d779-4b9a-9491-b8e58f109399.webp",
      },
      slug: "sohbet-jumayew",
    },
    {
      id: 38,
      name: "Eldar Ahmedow",
      verified: true,
      shareUrl: "https://aydym.com/artist/38/eldar-ahmedow",
      image: {
        small:
          "https://storage.aydym.com/images/thumbnail/2021/12/15/41dc7467-91a2-4125-9027-dfd10beda19b.webp",
        url: "https://storage.aydym.com/images/thumbnail/2021/12/15/dbf2e297-1614-482b-a9ed-8ed85bbfe6a6.webp",
      },
      slug: "eldar-ahmedow",
    },
    {
      id: 315,
      name: "Däli Däde",
      verified: true,
      shareUrl: "https://aydym.com/artist/315/dali-dade",
      image: {
        small:
          "https://storage.aydym.com/images/thumbnail/2024/09/26/11eb591b-bb21-48c3-9841-1e0e8176e68e.webp",
        url: "https://storage.aydym.com/images/thumbnail/2024/09/26/13f09923-4194-4cee-aff2-4edaa2121212.webp",
      },
      slug: "dali-dade",
    },
    {
      id: 458,
      name: "Gyzylgül Babaýewa",
      verified: true,
      shareUrl: "https://aydym.com/artist/458/gyzylgul-babayewa",
      image: {
        small:
          "https://storage.aydym.com/images/thumbnail/2023/11/08/7e2e2bc3-f062-4d99-b98d-ee92ff713b94.webp",
        url: "https://storage.aydym.com/images/thumbnail/2023/11/08/3713249b-55fc-4bf4-8343-da95c9c3d627.webp",
      },
      slug: "gyzylgul-babayewa",
    },
    {
      id: 45,
      name: "Kuwwat Dönmezow",
      verified: true,
      shareUrl: "https://aydym.com/artist/45/kuwwat-donmezow",
      image: {
        small:
          "https://storage.aydym.com/images/thumbnail/2023/10/28/3415e499-3e03-4f0f-b60a-a9ee9f656387.webp",
        url: "https://storage.aydym.com/images/thumbnail/2023/10/28/15231a6f-d229-4ac9-be4b-3dd820a4f7c4.webp",
      },
      slug: "kuwwat-donmezow",
    },
    {
      id: 46,
      name: "SBeater",
      verified: true,
      shareUrl: "https://aydym.com/artist/46/sbeater",
      image: {
        small:
          "https://storage.aydym.com/images/thumbnail/2024/05/06/daa9647e-73c8-4fc8-b277-0a5bfa75b930.webp",
        url: "https://storage.aydym.com/images/thumbnail/2024/05/06/db72a831-e1c9-4e6b-b07d-44fce189a197.webp",
      },
      slug: "sbeater",
    },
    {
      id: 102,
      name: "Mähri Pirgulyýewa",
      verified: true,
      shareUrl: "https://aydym.com/artist/102/mahri-pirgulyyewa",
      image: {
        small:
          "https://storage.aydym.com/images/thumbnail/2023/10/28/fa4743a7-893c-4409-9a6e-457aee8654e7.webp",
        url: "https://storage.aydym.com/images/thumbnail/2023/10/28/d8519482-81f0-4979-b445-79f2feb81b34.webp",
      },
      slug: "mahri-pirgulyyewa",
    },
    {
      id: 99,
      name: "Maral Durdyýewa",
      verified: true,
      shareUrl: "https://aydym.com/artist/99/maral-durdyyewa",
      image: {
        small:
          "https://storage.aydym.com/images/thumbnail/2024/10/11/780d6b2c-a01c-4a0e-b9ac-a1a36edab1f6.webp",
        url: "https://storage.aydym.com/images/thumbnail/2024/10/11/8639c336-a98b-4bc3-bd1e-8904dc7ea1ab.webp",
      },
      slug: "maral-durdyyewa",
    },
    {
      id: 572,
      name: "Kurtuluş Kuş",
      verified: false,
      shareUrl: "https://aydym.com/artist/572/kurtulus-kus",
      image: {
        small:
          "https://storage.aydym.com/images/thumbnail/2022/08/10/1882e1e1-512f-4b30-9509-1505b9f46436.webp",
        url: "https://storage.aydym.com/images/thumbnail/2022/08/10/64ec8dd9-0303-49e2-a959-4a7fccffb18f.webp",
      },
      slug: "kurtulus-kus",
    },
    {
      id: 104,
      name: "Nazir Habibow",
      verified: true,
      shareUrl: "https://aydym.com/artist/104/nazir-habibow",
      image: {
        small:
          "https://storage.aydym.com/images/thumbnail/2023/09/26/e049f125-d1d4-4f3b-8aa5-6241d9abb403.webp",
        url: "https://storage.aydym.com/images/thumbnail/2023/09/26/3333cf65-16e0-4ce1-93e8-45e3cbef073f.webp",
      },
      slug: "nazir-habibow",
    },
  ],
  total: 490,
  artist: {
    id: 790,
    name: "Aydayozin ",
    description: "",
    myFollowing: false,
    verified: true,
    place: "INTERNAL",
    categories: [],
    image: {
      small:
        "https://storage.aydym.com/images/thumbnail/2024/09/13/81254b49-49a6-45e8-b8f5-fd24a3bb0941.webp",
      url: "https://storage.aydym.com/images/thumbnail/2024/09/13/b7e800cb-0380-414a-96a0-ccaf6ea463e4.webp",
    },
    shareUrl: "https://aydym.com/artist/790/aydayozin",
    slug: "aydayozin",
    songsCount: "89",
    videosCount: "20",
    albumsCount: "0",
    followersCount: "911",
  },
};

const musicReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MUSICS:
      return { ...state, musics: [...action.musics] };
    case SET_TOTAL:
      return { ...state, total: action.count };
    case SET_ARTIST:
      return { ...state, artist: action.artist };
    default:
      return state;
  }
};

export const setMusics = (musics) => ({
  type: SET_MUSICS,
  musics,
});

export const setTotal = (count) => ({
  type: SET_TOTAL,
  count,
});
export const setArtist = (artist) => ({
  type: SET_ARTIST,
  artist,
});

export const getMusics = () => (dispatch) => {
  aydymAPI.getAll().then((data) => {
    dispatch(setMusics(data.data));
  });
};

export const getTotal = () => (dispatch) => {
  aydymAPI.getAll().then((data) => {
    dispatch(setTotal(data.total));
  });
};

export const getArtist = (id) => (dispatch) => {
  debugger;
  aydymAPI.getOne(id).then((data) => {
    dispatch(setArtist(data));
  });
};

export default musicReducer;
