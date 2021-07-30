import {container} from 'tsyringe';
import MD5HashProvider from './MD5Provider/implementations/MD5HashProvider';
import MD5Provider from './MD5Provider/models/MD5Provider';

container.registerSingleton<MD5Provider>('HashProvider', MD5HashProvider)