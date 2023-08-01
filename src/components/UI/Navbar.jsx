export default function Navbar({ links }) {
  return (
    <nav class="">
      <div class="flex flex-row justify-between p-1">
        <h1 class="flex flex-row text-blue-600 font-lora">Brian Lu</h1>
        <ul class="flex flex-row space-x-4">{links.map((link) => link)}</ul>
      </div>
    </nav>
  );
}
