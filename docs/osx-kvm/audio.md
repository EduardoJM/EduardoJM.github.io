# Audio entre Dispositivos

O áudio não é passado, diretamente, pelo `OSX-KVM` para a máquina `host`. A solução mais simples encontrada para executar os sons do `MacOS`, ao invés de configurar um `passthrough` foi utilizar um combo do [BlackHole](https://github.com/ExistentialAudio/BlackHole) instalado no `MacOS` e configurado como `driver` além do [SonoBus](https://sonobus.net/) para fazer streaming do som obtido pelo `BlackHole` para outros dispositivos (como, por exemplo, uma instalação `mobile` do `SonoBus` em algum celular.)
