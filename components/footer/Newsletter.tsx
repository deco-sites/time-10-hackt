import Text from "$store/components/ui/Text.tsx";

function Newsletter() {
  return (
    <div class="flex flex-col sm:flex-row items-center sm:gap-20">
      <div class="flex">
        <strong class="text-white mr-[5px]">Cadastre-se</strong>
        <span class="text-white">e receba novidades exclusivas em seu e-mail</span>
      </div>
      <form class="flex flex-row items-center gap-2 font-body text-body w-full sm:w-[408px]">
        <input
          class="py-2 px-3 bg-white text-black rounded-3xl"
          placeholder="Seu e-mail"
        />
        <button
          class="py-2 px-3 bg-[#040491] rounded-3xl text-white"
          type="bgutton" // prevent form's default behavior
        >
          Enviar
        </button>
      </form>
    </div>
  );
}

export default Newsletter;
