export const API_KEY = 'AIzaSyCVXK6t2hN5qzlD7n3GWco0m055Ylq6m0g';

export const value_converter = (value) => {
    if(value>=1000000)
    {
        return Math.floor(value/1000000)+"M";
    }
    else if(value>=1000)
    {
        return Math.floor(value/1000)+"k";
    }
    else{
        return value;
    }
}