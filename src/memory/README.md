# Memory Component

## 1. Compilation

```bash
g++ ./memory.cpp -std=c++11 -o memory.exe
```

## 2. Manual Execution

Command format:
```bash
./memory.exe <mem size> <iteration times>
```

For example, if we want to test the execution time of allocate 1024MB 5 times:

```bash
./memory.exe 1024 5
```

The `STDOUT` output will be a single floating number which is execution duration in `millisecond`, `-1` denotes that allocation failed.