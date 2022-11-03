"""Base functions."""

import colorama

colorama.init(autoreset=True)

def error(message):
    """Send an error log message."""

    print(f'{colorama.Fore.RED}[PrettyPedia ERROR] {message}')
