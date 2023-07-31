export default function Navbar({ links }) {
  return (
    <nav>
      <div>
        <div>
          <ul>{links.map((link) => link)}</ul>
        </div>
      </div>
    </nav>
  );
}
