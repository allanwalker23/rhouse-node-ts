import {container} from 'tsyringe';
import '@modules/users/providers'
import DiskStorageProvider from './StorageProvider/fakes/FakeStorageProvider';
import IStorageProvider from './StorageProvider/models/IStorageProvider';


container.registerSingleton<IStorageProvider>(
    'StorageProvider',
    DiskStorageProvider
)