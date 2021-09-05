export const computeDeviceModal = () => {

  const width = window.innerWidth;

  var medias = [
    window.matchMedia('(max-width:418px)'), //和CSS一样，也要注意顺序！
    window.matchMedia('(max-width:768px)'),
    window.matchMedia('(max-width:992px)'),
    window.matchMedia('(max-width:1200px)')
  ]

  if(medias[0].matches){
      console.log( `width is ${width} & <=418`);
  }else if(medias[1].matches){
      console.log( `width is ${width} & >418 & <=768`);
  }else if(medias[2].matches){
    console.log( `width is ${width} & >768 & <=992`);
  }else if(medias[3].matches){
    console.log( `width is ${width} & > 992 & <=1200`);
  }else {
    console.log( `width is ${width} & >1200`);
  }


  if (medias[0].matches || medias[1].matches) {
    return  {
      isMobile: true,
      client: "Mobile",
    }
  } else {
    return  {
      isMobile: false,
      client: "PC",
    }
  }

}
