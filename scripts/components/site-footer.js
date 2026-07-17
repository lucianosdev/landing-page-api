class SiteFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML =


`<footer class="rodape">
     <h5>Books & Code - Todos os direitos reservados.</h5>
</footer>`
    ;
    }
    
}

customElements.define('site-footer', SiteFooter)
