// This is a JavaScript file

window.onload = function(){
  document.querySelector('#exibir').addEventListener('click',function(){

       cordova.plugins.barcodeScanner.scan(
          function (result) {
              if(result.text == '280720550'){
                document.querySelector('#texto').innerHTML = "<h4>Produto:</h4><br><h5>Nome do Produto: iPad Mini Wi-Fi 64Gb - Cinza Espacial</h5>";
                document.querySelector('#img').src = 'lib/cel1.jpg';
                document.querySelector('#info').innerHTML = "Valor: R$ 3.499,00<br>Descrição:<br>Processador A12 Bionic com arquitetura de 64 bits Neural Engine Coprocessador M12 integrado<br>Sistema operacional iOS<br>Tamanho da tela 7.9''<br>Tecnologia Wi-Fi<br>Resolução da câmera - Câmera traseira: 8MP; - Câmera frontal: 7MP<br>GPS Sim<br>Grava vídeos Sim<br>Câmera traseira Sim<br>Câmera frontal Sim<br>Memória Flash 64 GB<br>Funciona como celular: Não";
              }

              if(result.text == '989895555'){
                document.querySelector('#texto').innerHTML = "<h4>Produto:</h4>";
                document.querySelector('#img').src = 'lib/cel2.jpg';
                document.querySelector('#info').innerHTML = "Nome do Produto: Samsung Galaxy J8 Dual Chip 4g 64gb Tela 6<br>Valor: R$ 1.888,00<br>Velocidade do Processador: 1.8GHz<br>Tipo de Processador: Octa Core<br>Tamanho (Tela Principal): 153.6mm (6.0')<br>Resolução (Tela Principal):1480 x 720 (HD+)<br>Câmera Resolução - Câmera Traseira: 16.0 MP + 5.0 MP<br>Memória RAM(GB): 4 GB<br>Memória Total Interna (GB) - 64 GB<br>Memória Disponível (GB) - 50.6 GB";
                document.querySelector('#img').src = 'lib/cel2.jpg';
              }

              if(result.text == '85236987'){
                document.querySelector('#texto').innerHTML = "<h5>Produto: Motorola One XT1941 Branco 64GB</h5>";
                document.querySelector('#img').src = 'lib/cel3.jpg';
                document.querySelector('#info').innerHTML = "Valor:<br>Sistema Operacional Android 8.1 Oreo<br>Processador Qualcomm Snapdragon 625 (MSM8953) Octa-Core de 2.0 GHz<br>RAM 4GB<br>Tecnologia GSM, 3G e 4G<br>Memória interna 64 GB Total sendo uma parte usada para o sistema operacional e aplicativos pré-instalados<br>Cor Branco";
                
              }

              if(result.text == '85369877444'){
                document.querySelector('#texto').innerHTML = "<h5>Produto: Asus Zenfone Max Pro M1<br>Valor: R$ 1.199,00</h5>";
                document.querySelector('#img').src = 'lib/cel4.jpg';
                document.querySelector('#info').innerHTML = "Processador: Qualcomm Snapdragon SDM636 1,8 GHz, 2 Mb Cache<br>Sistema Operacional: Android 8.1 Oreo<br>Memória Ram: 4 Gb<br>Memória Interna: 64 Gb<br>Memória Expansiva: 2TB Sd<br>Tela: 6,0'Led Backlight Ips panel (1080x2160)<br>Tipo de Chip: Nano - Dual Chip: Sim<br>Conectividade: 3G; 4G; Wi-fi<br>Câmera Frontal: 8MP<br>Câmera Traseira: 16+5MP";

              }
          },
          function (error) {
              alert("Scanning failed: " + error);
          },
          {
              preferFrontCamera : false, // iOS and Android
              showFlipCameraButton : true, // iOS and Android
              showTorchButton : true, // iOS and Android
              torchOn: false, // Android, launch with the torch switched on (if available)
              saveHistory: true, // Android, save scan history (default false)
              prompt : "Place a barcode inside the scan area", // Android
              resultDisplayDuration: 500, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
              formats : "QR_CODE,PDF_417,CODE_39", // default: all but PDF_417 and RSS_EXPANDED
              orientation : "landscape", // Android only (portrait|landscape), default unset so it rotates with the device
              disableAnimations : true, // iOS
              disableSuccessBeep: true // iOS and Android
          }
         );

  });
}