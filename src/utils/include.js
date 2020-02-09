 function include(response, day){
        let array
        if(response){
            
            array = response?response:[]
            if(array.includes(day)){
                
                return true
            }else{
                return false
            }
    }else{
        return false
    }
}

export default include;