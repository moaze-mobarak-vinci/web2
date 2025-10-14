interface FooterProps {
  text: string;
}



export function FooterText ({ text } : FooterProps) {
    return ( 
      <footer>{text}</footer>  
);
}

