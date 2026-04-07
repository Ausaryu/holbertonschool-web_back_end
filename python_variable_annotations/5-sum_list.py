#!/usr/bin/env python3
import typing
def sum_list(input_list: typing.List[float]) -> float:
    result = 0
    for num in input_list:
        result += num
    return result
