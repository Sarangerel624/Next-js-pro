
 
 export const Test = (props) => {
    const flagUrl = props.flagUrl;
    const flagName = props.name;

      return (
        <div className="w-[300px] h-[200px] shadow-md rounded-sm">
            <img src={flagUrl} className="w-[250px] h-[150px] ml-[25px]"></img>
            <p className="text-center">{flagName}</p>
        </div>
        
      )
    }

