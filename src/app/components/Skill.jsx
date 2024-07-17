export default function Skill({ icon: Icon, children }) {
  const isValidComponent = typeof Icon === 'function' || (typeof Icon === 'object' && Icon !== null && typeof Icon.render === 'function');

  return (
    <div className="m-6 flex h-[9rem] w-[9rem] flex-col items-center justify-center rounded-lg border-2 border-highlight bg-primary p-4 text-center text-text duration-500 hover:scale-[1.1] hover:shadow-[0_0_10px_0_highlight] 2sm:mx-[1rem] sm:mx-[2rem] xl:h-[9.5rem] xl:w-[9.5rem]">
      <div className="mx-auto mt-2 h-[5rem] w-[5rem] xl:h-[5.5rem] xl:w-[5.5rem] text-[5rem] xl:text-[5.5rem]">
        <Icon />
      </div>

    </div>
  );
}