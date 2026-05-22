// === Config ===
// Numero do WhatsApp em formato internacional (apenas digitos): 55 + DDD + numero.
// (51) 3471-3344 e fixo. Troque por um celular Neumaq quando tiver.
const WHATSAPP_NUMERO = "555134713344";
const WHATSAPP_MENSAGEM = "Ola! Gostaria de solicitar um orcamento de cilindros hidraulicos.";
const EMAIL_DESTINO = "ricardo@neumaq.com.br";
const EMAIL_ASSUNTO = "Solicitacao de orcamento - Cilindros hidraulicos";
const EMAIL_CORPO = "Ola, gostaria de solicitar um orcamento.\n\nAplicacao:\nDiametro (mm):\nCurso (mm):\nTipo de montagem:\nQuantidade:\n\nObrigado.";

// === Ano automatico no footer ===
document.getElementById("anoAtual").textContent = new Date().getFullYear();

// === Links de contato dinamicos ===
const waLink = `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(WHATSAPP_MENSAGEM)}`;
const mailLink = `mailto:${EMAIL_DESTINO}?subject=${encodeURIComponent(EMAIL_ASSUNTO)}&body=${encodeURIComponent(EMAIL_CORPO)}`;
document.getElementById("ctaWhatsapp").href = waLink;
document.getElementById("ctaEmail").href = mailLink;

// === Menu mobile (hamburguer) ===
const btnMenu = document.getElementById("menuToggle");
const menuMobile = document.getElementById("menuMobile");

btnMenu.addEventListener("click", () => {
  const aberto = menuMobile.classList.toggle("hidden") === false;
  btnMenu.setAttribute("aria-expanded", aberto ? "true" : "false");
});

// Fecha o menu ao clicar em qualquer link dentro dele
menuMobile.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menuMobile.classList.add("hidden");
    btnMenu.setAttribute("aria-expanded", "false");
  });
});

// === Sombra no header ao rolar ===
const header = document.querySelector("header");
const aplicarSombra = () => {
  if (window.scrollY > 8) header.classList.add("scrolled");
  else header.classList.remove("scrolled");
};
window.addEventListener("scroll", aplicarSombra, { passive: true });
aplicarSombra();

// === Reveal on scroll: aparece suavemente quando entra no viewport ===
const observador = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observador.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll("section h2, section article, section .grid > div").forEach((el) => {
  el.classList.add("reveal");
  observador.observe(el);
});
