import { IProduct } from './product';

export const PRODUCT_ITEMS: IProduct[] = [
    {
        id: 1,
        name: 'scalegroup_0',
        public_ip: '164.52.196.201',
        private_ip: '172.16.115.141',
        label: 'Default',
        backup: 'Activated'
    }, {
        id: 2,
        name: 'scalegroup_1',
        public_ip: '101.53.136.59',
        private_ip: '172.16.115.145',
        label: 'Default',
        backup: 'Activated'
    }, {
        id: 3,
        name: 'loadbackup',
        public_ip: '164.52.193.196',
        private_ip: '172.16.115.100',
        label: 'Default',
        backup: 'Deactivated'
    }, {
        id: 4,
        name: 'C2-12GB-OpenSUSE-582',
        public_ip: '101.53.136.233',
        private_ip: '152.16.115.141',
        label: 'Default',
        backup: 'Activated'
    }, {
        id: 5,
        name: 'Test',
        public_ip: '101.53.136.59',
        private_ip: '182.16.115.141',
        label: 'Default',
        backup: 'Deactivated'
    }
]