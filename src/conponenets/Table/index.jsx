// import "../Table/css/index.css"
import "../Table/index.css";

const MyTable = () => {
  const dataTable = [
    { name: "abc1", score: 40 },
    { name: "abc2", score: 42 },
    { name: "abc3", score: 14 },
    { name: "abc4", score: 32 },
    { name: "abc5", score: 42 },
    { name: "abc6", score: 45 },
    { name: "abc7", score: 42 },
    { name: "abc8", score: 90 },
    { name: "abc9", score: 14 },
    { name: "abc10", score: 90 },
  ];
  console.log("dataTable", dataTable);

  let rank = 0;

  // const Total = dataTable.reduce(function (x, y) {
  //   return { score: x.score + y.score };
  // });
  // console.log("Total", Total);
  // const entries = Object.entries(Total); //convert object to array
  // console.log("entries", entries);

  // let element = 0;
  // console.log("element", element);
  return (
    <div className="countainer">
      <div className="table">
        <table>
          <caption>Table</caption>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Name</th>
              <th>score</th>
            </tr>
          </thead>
          {dataTable
            .sort((a, b) => b.score - a.score) // next she previuos ko minus kiya
            // .dataTable.score === dataTable.score {return index - 1}
            .map((values, index) => {
              console.log("index of database", index);
              if (index > 0 && dataTable[index - 1].score === values.score) {
                rank = rank;
              } else {
                rank = rank + 1;
              }
              return (
                <tbody key={index}>
                  <tr>
                    <td>{rank}</td>
                    <td>{values.name}</td>
                    <td>{values.score}</td>
                  </tr>
                </tbody>
              );
            })}
          <tfoot>
            {/* <tr>
                <th scope="row">Totals</th>
                <td></td>
                <td>{entries}</td>
              </tr> */}
          </tfoot>
        </table>
      </div>
    </div>
  );
};
export default MyTable;
