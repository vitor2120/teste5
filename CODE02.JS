function tirarblur(){


   const el = document.querySelector('.bestplaces');
      const atual = el.style.filter;

      // Se estiver sem blur, aplica blur
      if (atual === 'blur(0px)' || atual === 'blur(0)') {
        el.style.filter = 'blur(1px)';
      } else {
        el.style.filter = 'blur(0)';
      }
    }



