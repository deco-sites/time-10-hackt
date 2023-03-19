const location = "São Paulo-SP";

function TopHeader() {
  return (
    <div class="bg-[#040491] h-10 hidden sm:flex text-xs">
      <div class="flex max-w-[1200px] m-auto w-full justify-between	">
        <div class="flex items-center">
          <p class="text-[#fff]">
            Ofertas para <span class="text-[#00CF80]">{location}</span>
          </p>
          <button class="bg-[#00CF80] text-[#040491] ml-1 rounded-full px-2 focus:outline-none focus:ring-0 focus:ring-transparent">
            alterar
          </button>
        </div>
        <div class="text-sm flex text-[#fff] gap-6    ">
          <p class="hover:underline cursor-pointer"><strong>Televendas:</strong> 4002.4334</p>
          <p class="hover:underline cursor-pointer"><strong>Whatsapp:</strong> (62) 8562.7000</p>
          <p class="hover:underline cursor-pointer">Central de Atendimento</p>
          <p class="hover:underline cursor-pointer">Trabalhe conosco</p>
        </div>
      </div> 
    </div>
  );
}

export default TopHeader;
