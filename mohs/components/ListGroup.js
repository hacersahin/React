import { useState } from "react";

function ListGroup({ baslik }) {
  let sehirler = ["New York", "İstanbul", "London", "Tokyo", "Paris"];

  let [seciliIndex, setSeciliIndex] = useState(-1);

  //   sehirler = [];
  //   const mesaj = sehirler.length === 0 ? <p>Eleman Bulunamadı!</p> : null;

  //const handleClick = (event = MouseEvent) => console.log(event);

  return (
    <>
      <h1>{baslik}</h1>
      {sehirler.length === 0 ? <p>Eleman Bulunamadı!</p> : null},
      {sehirler.length === 0 && <p>Eleman Bulunamadı!</p>}
      {/* ////veya
      {mesaj} */}
      <ul className="list-group">
        {sehirler.map((eleman, index) => (
          <li
            className={
              seciliIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={eleman}
            onClick={() => setSeciliIndex(index)}
          >
            {eleman}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;

// import { useState } from "react";

// function ListGroup() {
//   let sehirler = ["New York", "İstanbul", "London", "Tokyo", "Paris"];

//   let [seciliIndex, setSeciliIndex] = useState(-1);

//   //   sehirler = [];
//   //   const mesaj = sehirler.length === 0 ? <p>Eleman Bulunamadı!</p> : null;

//   //const handleClick = (event = MouseEvent) => console.log(event);

//   return (
//     <>
//       <h1>Liste Grubu</h1>
//       {sehirler.length === 0 ? <p>Eleman Bulunamadı!</p> : null},
//       {sehirler.length === 0 && <p>Eleman Bulunamadı!</p>}
//       {/* ////veya
//       {mesaj} */}
//       <ul className="list-group">
//         {sehirler.map((eleman, index) => (
//           <li
//             className={
//               seciliIndex === index
//                 ? "list-group-item active"
//                 : "list-group-item"
//             }
//             key={eleman}
//             onClick={() => setSeciliIndex(index)}
//           >
//             {eleman}
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// }

// export default ListGroup;
