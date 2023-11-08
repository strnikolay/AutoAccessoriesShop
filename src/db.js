
const DB = [ 
    {
        title: "АККУМУЛЯТОРЫ",
        url:"/?acum" ,
        brand:[
            { brandtitle: "M АКБ", 
            url: "/?acum&m_akb",
            model: 
                [
                    {title: "АКБ M1", content: "46456"}, 
                    {title: "АКБ M2", content: "46456"} 
                ]
            }, 
            { brandtitle: "N АКБ ", 
            url: "/?acum&n_akb",
            model: 
                [
                    {title: "АКБ N1", content: "46456"}, 
                    {title: "АКБ N2", content: "46456"}, 
                    {title: "АКБ N3", content: "46456"}   
                ]
            },
            { brandtitle: "S АКБ ", 
            url: "/?acum&s_akb",
            model: 
                [
                    {title: "АКБ S1", content: "46456"}, 
                    {title: "АКБ S2", content: "46456"}, 
                    {title: "АКБ S3", content: "46456"}   
                ]
            }  
        ]
    },
    {
        title: "Моторное масло",
        url:"/?oil" ,
        brand:[
            { brandtitle: "M Масло", 
            url: "/?acum&m_oil",
            model: 
                [
                    {title: "Масло M1", content: "46456"}, 
                    {title: "Масло M2", content: "46456"} 
                ]
            }, 
            { brandtitle: "N Масло ", 
            url: "/?acum&n_akb",
            model: 
                [
                    {title: "Масло N1", content: "46456"}, 
                    {title: "Масло N2", content: "46456"}, 
                    {title: "Масло N3", content: "46456"}   
                ]
            },
            { brandtitle: "S Масло ", 
            url: "/?acum&s_akb",
            model: 
                [
                    {title: "Масло S1", content: "46456"}, 
                    {title: "Масло S2", content: "46456"}, 
                    {title: "Масло S3", content: "46456"}   
                ]
            }  
        ]
    } 
]

export default DB;