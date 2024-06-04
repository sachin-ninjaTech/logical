const MyTest = () => {

    const arr = [
        {name: "abc1", score: "40"},  
        {name: "abc2", score: "42"},  
        {name: "abc3", score: "48"},  
        {name: "abc4", score: "32"}, 
        {name: "abc5", score: "42"}, 
        {name: "abc6", score: "45"}, 
        ]

        
    const sortarr = arr.sort((x , y) => y.score - x.score)
    console.log("sortarr" , sortarr);
    let rank = 0;
    return (
        <>
        
        {
            sortarr.map((values , index) => {
                if (index > 0 && arr[index - 1].score === values.score) {
                    rank = rank 
                    console.log("rank" , rank);
                }else{
                    rank = rank + 1
                }
                return(
                    
                     <tbody key={index}>
                      <tr>
                        <td>{rank}</td>
                        <td>{values.name}</td>
                        <td>{values.score}</td>
                      </tr>
                    </tbody>
                
                )
            })
            
        }
        </>
    )
}
export default MyTest;