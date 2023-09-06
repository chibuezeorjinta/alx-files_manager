// Redis Client constructor
import redis from 'redis'
import { promisify } from 'util'


class RedisClient {
	constructor() {
		this.client = redis.createClient();
		this.client.on('error', (error) => {
			console.log(`Redis connection error: ${error.message}`);
		});
		
		this.redisGet = promisify(this.client.get).bind(this.client);
	}
	
	isAlive() {
		return this.client.connected;

	}

	async get(key) {
		return this.redisGet(key).catch((err) => console.log(err));
	}

	async set(key, value, expire) {
		this.client.setex(key, expire, value);
	}

	async del(key) {
		return this.client.del(key);
	}
}

const redisClient = new RedisClient();

export default redisClient;