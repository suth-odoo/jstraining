/** @odoo-module **/

import { useEffect,useRef} from "@odoo/owl";
// import { useAutofocus} from  "@web/core/utils/hooks";

export function useAutofocus(name) {
    let ref = useRef(name);
    useEffect(
      (el) => el && el.focus(),
      () => [ref.el]
    );
  }