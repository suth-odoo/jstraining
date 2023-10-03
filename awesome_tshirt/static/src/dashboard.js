/** @odoo-module **/

import { Component } from "@odoo/owl";
import { registry } from "@web/core/registry";
import { useService } from "@web/core/utils/hooks";

class AwesomeDashboard extends Component {
    
setup() {
    this.action = useService("action");
}
openCustomers() {
    this.action.doAction("base.action_partner_form");
}
}

AwesomeDashboard.components = {};
AwesomeDashboard.template = "awesome_tshirt.clientaction";

registry.category("actions").add("awesome_tshirt.dashboard", AwesomeDashboard);
