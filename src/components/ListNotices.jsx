import './main.css'
export function ListNotice({notice}) {
    const imgUrlStart = "https://agenciadenoticias.ibge.gov.br/"
    var imgUrlEnd1 = notice.imagens 
    var imgUrlEnd2 = imgUrlEnd1.split(',')
    var imgUrlEnd3 = imgUrlEnd2[0].length - 1
    const imgUrlEnd = imgUrlEnd2[0].substring(16, imgUrlEnd3)

    return(
        <div className="card-notice"
        //style={{backgroundImage: `url(${imgUrlStart}${imgUrlEnd}) cover`} } 
        >  <div className="title-notice">
                <h2>{notice.titulo}</h2>
                <div>
                 <strong>Data Publicação: {notice.data_publicacao}</strong>   
                 <strong>{notice.produtos}</strong>
                </div>
            </div>
                <div className="img-notice">
                    <img src={imgUrlStart+imgUrlEnd} alt="img-noticia" />
                </div>
                <div className="details-notice">

                    <p>{notice.introducao}</p>
                    
                </div>
                <div>
                        
                    <strong>Fonte: <a href={notice.link} target="_blanc">  {notice.link}</a></strong>
                </div>
        </div>
       
    )
    
}