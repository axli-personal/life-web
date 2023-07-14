import axios from 'axios';
import { backend } from './index.js';

export function collectHealthData(args) {
  const body = {
    amount: args.amount.value,
    unit: args.unit.value,
    collectTime: args.collectDate.value.toISOString(),
  };

  return axios.post(`${backend}/health-data/${args.type.value}`, body);
}
