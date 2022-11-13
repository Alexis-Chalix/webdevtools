function LateralMenu({ isOpen }) {
    return (
        <section className="h-full border-r border-solid border-r-zinc-200 customTransition" style={{ width: isOpen ? "240px" : "64px" }}>
            { isOpen ? "open" : "closed" }
        </section>
    );
}

export default LateralMenu;