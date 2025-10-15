interface PageTitleProps {
  title : string;
  logoUrl : string;
  children ?: React.ReactNode;
}

export function PageTitle({ title, logoUrl, children }: PageTitleProps) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <img
        src={logoUrl}
        alt="Logo"
        style={{ width: "50px", height: "50px", objectFit: "contain" }}
      />
      <div>
        <h1>{title}</h1>
        {children}
      </div>
    </div>
  );
}