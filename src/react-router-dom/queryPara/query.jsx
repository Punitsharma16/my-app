import { useSearchParams } from "react-router-dom";

export const QueryPara = ()=>{
    const [search,setSearch] = useSearchParams();
    // const getColor = (e)=>{
    //     const {value} = e.target;
    //     setSearch({color:value});
    //     const val = search.get('Shoe')
    //     console.log(val);

    // }
    // const getShoe = (e)=>{
    //     const {value} = e.target;
    //     setSearch({Shoe:value});
    // }
    // const getNum = (e)=>{
    //     const {value} = e.target;
    //     setSearch({Number:value});
    // }
    const getShoeInfo = (e)=>{
        const {name,value} = e.target;
        search.set(name,value);
        setSearch(search);
    }
    return(
        <>
        <label htmlFor="color">Color : </label>
        <select id="color" name="Color" onChange={getShoeInfo}>
            <option value="red">Red</option>
            <option value="black">Black</option>
            <option value="green">Green</option>
            <option value="pink">Pink</option>
        </select>
        <br/>
        <br/>

        <label htmlFor="shoes">Shoes : </label>
        <select id="shoes" name="Shoe" onChange={getShoeInfo}>
            <option value="addidas">addidas</option>
            <option value="guchi">guchi</option>
            <option value="sports">sports</option>
            <option value="loafer">loafer</option>
        </select>
        <br/>
        <br/>

        <label htmlFor="num">Number : </label>
        <select id="num" name="Number" onChange={getShoeInfo}>
            <option value="10">10</option>
            <option value="9">9</option>
            <option value="7">7</option>
            <option value="6">6</option>
        </select>
        </>
    )
}