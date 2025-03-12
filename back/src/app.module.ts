import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ProplayersModule } from './proplayers/proplayers.module';
import { TeamsModule } from './teams/teams.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('DATABASE_URL'),
      }),
      inject: [ConfigService],
    }),
    ProplayersModule,
    TeamsModule,
  ],
})
export class AppModule {}
