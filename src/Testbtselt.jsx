import React from 'react'

const Testbtselt = () => {


    const arr = [
        {name: "abc1", score: "40"},
        {name: "abc2", score: "42"},
        {name: "abc3", score: "48"},
        {name: "abc4", score: "32"},
        {name: "abc5", score: "42"},
        {name: "abc6", score: "45"},
        ]
        
       let rank = 0; 

  return (
    <div>
   
   {
    arr.sort((a , b) => b.score - a.score).map((ele , index) => {
        if (index > 0 && arr[index - 1].score == ele.score) {
            rank = rank; 
        }
        else{
            rank = rank + 1
        }
        return(
            <>
            
              <tbody key={index}>
                      <tr>
                        <td>{rank}</td>
                        <td>{ele.name}</td>
                        <td>{ele.score}</td>
                      </tr>
                    </tbody>           
            </>
        )
    })
   }

    </div>
  )
}

export default Testbtselt