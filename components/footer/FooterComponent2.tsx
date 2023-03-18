// import Text from "$store/components/ui/Text.tsx";

function FooterComponent() {
  return (
    <>
      <div class="divide-b-1 pb-5 mb-5 border-b-1 border-b-black">
        <div class="flex justify-between">
          <div class="flex">
            <span>Formas de pagamento</span>
          </div>
          <div class="flex">
            <span>Certificados de Segurança</span>
          </div>
        </div>
      </div>
      <div class="divide-default text-center">
        <p class="text-xs font-medium">* Preços e condições de pagamento exclusivos para o Site e Televendas da Novo Mundo (podendo ou não refletirem os valores da rede de lojas físicas), com validade somente para o dia de hoje ou enquanto durarem os estoques.</p>
        <p class="text-xs font-medium">O preço válido será o mostrado no carrinho de compras, no momento da finalização do pedido.</p>
        <a class="text-xs font-medium text-[#040491] " href="">*** Consulte nossa política de frete para maiores informações</a>
        <p class="text-xs font-medium">Copyright 2022 - Novo Mundo S.A. - CNPJ: 01.534.080/0001-28</p>
        <p class="text-xs font-medium">Endereço: Alameda dos Flamboyants, 101, Qd. QC 03, Lt. 01, Sítio Bernardo Sayão, Goiânia - GO, CEP: 74680-200</p>
        <p class="text-xs font-medium">Telefone: (62) 3501-1000</p>
      </div>
    </>
  );
}

export default FooterComponent;
