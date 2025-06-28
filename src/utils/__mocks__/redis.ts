export const createClient = () => ({
    on: jest.fn(),
    connect: jest.fn(),
    quit: jest.fn(),
    set: jest.fn(),
    get: jest.fn(),
  });
  